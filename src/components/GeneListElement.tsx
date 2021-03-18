import React from 'react'
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  Card,
  Chip,
  Grid
} from '@material-ui/core'
import { Gene, Maybe, _GeneMapsGeneSymbols, _GeneSymbolSynonyms } from '../generated/graphql';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: '10px',
      padding: '10px',
    },
    gridItemTitle: {
      fontWeight: 'bold'
    }
  })

interface Props extends WithStyles<typeof styles> {
  gene: Gene
}

const GridItemTitle = withStyles(styles)((props: any) => 
  <Grid className={props.classes.gridItemTitle} item xs={12} sm={4} md={2} lg={1}>{props.children}</Grid>
)
const GridItemValue = (props: any) => <Grid item xs={12} sm={8} md={10} lg={11}>{props.children}</Grid>

function GeneListElement(props: Props) {
  const { classes } = props;
  
  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
        <GridItemTitle>SID</GridItemTitle>
        <GridItemValue>{props.gene.sid}</GridItemValue>

        <GridItemTitle>Synonyms</GridItemTitle>
        <GridItemValue>
          {props.gene.mapsGeneSymbols?.map((geneMapsGeneSymbols: Maybe<_GeneMapsGeneSymbols>) => {
            return <Chip key={geneMapsGeneSymbols?.symbol?.sid} label={geneMapsGeneSymbols?.symbol?.sid}></Chip>
          })}
        </GridItemValue>
      </Grid>
    </Card>
  )
}

export default withStyles(styles)(GeneListElement)
