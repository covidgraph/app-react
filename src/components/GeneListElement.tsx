import React from "react";
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { Card, Chip, Grid } from "@material-ui/core";
import {
  Gene,
  Maybe,
  Protein,
  Transcript,
  _GeneMapsGeneSymbols,
  _GeneTranscripts,
  _TranscriptProteins,
} from "../generated/graphql";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: "10px",
      padding: "10px",
    },
    gridItemTitle: {
      fontWeight: "bold",
    },
    chipFocused: {
      background: theme.palette.secondary.main,
    },
  });

interface Props extends WithStyles<typeof styles> {
  gene: Gene;
}

interface ProteinWrapper {
  protein: Protein;
  transcriptSids: string[];
}

const distinctProteins = (
  maybeTranscripts: Maybe<Maybe<_GeneTranscripts>[]>
): ProteinWrapper[] => {
  const proteins = new Map<string, ProteinWrapper>();

  if (maybeTranscripts !== null) {
    maybeTranscripts.forEach((gt: Maybe<_GeneTranscripts>) => {
      if (gt !== null) {
        gt.transcript?.proteins?.forEach(
          (protein: Maybe<_TranscriptProteins>) => {
            if (protein?.protein) {
              if (proteins.has(protein.protein.sid)) {
                proteins
                  .get(protein.protein.sid)
                  ?.transcriptSids.push(gt.transcript!.sid);
              } else {
                proteins.set(protein.protein.sid, {
                  protein: protein.protein,
                  transcriptSids: [gt.transcript!.sid],
                });
              }
            }
          }
        );
      }
    });
  }

  return Array.from(proteins.values());
};

const GridItemTitle = withStyles(styles)((props: any) => (
  <Grid
    className={props.classes.gridItemTitle}
    item
    xs={12}
    sm={4}
    md={2}
    lg={1}
  >
    {props.children}
  </Grid>
));
const GridItemValue = (props: any) => (
  <Grid item xs={12} sm={8} md={10} lg={11}>
    {props.children}
  </Grid>
);

function GeneListElement(props: Props) {
  const { classes } = props;
  const [
    hoveredTranscript,
    setHoveredTranscript,
  ] = React.useState<Transcript | null>(null);

  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
        <GridItemTitle>SID</GridItemTitle>
        <GridItemValue>{props.gene.sid}</GridItemValue>

        <GridItemTitle>Synonyms</GridItemTitle>
        <GridItemValue>
          {props.gene.mapsGeneSymbols?.map(
            (geneMapsGeneSymbols: Maybe<_GeneMapsGeneSymbols>) => {
              return (
                <Chip
                  key={geneMapsGeneSymbols?.symbol?.sid}
                  label={geneMapsGeneSymbols?.symbol?.sid}
                ></Chip>
              );
            }
          )}
        </GridItemValue>

        <GridItemTitle>Transcripts</GridItemTitle>
        <GridItemValue>
          {props.gene.transcripts?.map(
            (transcripts: Maybe<_GeneTranscripts>) => {
              return (
                <Chip
                  key={transcripts?.transcript?.sid}
                  label={transcripts?.transcript?.sid}
                  className={
                    hoveredTranscript?.sid == transcripts?.transcript?.sid
                      ? classes.chipFocused
                      : ""
                  }
                  onMouseOver={() =>
                    setHoveredTranscript(transcripts?.transcript!)
                  }
                  onMouseLeave={() => setHoveredTranscript(null)}
                />
              );
            }
          )}
        </GridItemValue>

        <GridItemTitle>Coding Proteins</GridItemTitle>
        <GridItemValue>
          {distinctProteins(props.gene.transcripts!).map(
            (protein: ProteinWrapper) => {
              return (
                <Chip
                  key={protein.protein.sid}
                  label={protein.protein.sid}
                  className={
                    hoveredTranscript &&
                    protein.transcriptSids.indexOf(hoveredTranscript.sid) > -1
                      ? classes.chipFocused
                      : ""
                  }
                />
              );
            }
          )}
        </GridItemValue>
      </Grid>
    </Card>
  );
}

export default withStyles(styles)(GeneListElement);
