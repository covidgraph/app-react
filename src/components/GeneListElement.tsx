import React from 'react'
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  Card,
  Chip
} from '@material-ui/core'
import { Gene, GeneSymbol, Maybe, _GeneSymbolSynonyms } from '../generated/graphql';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: '10px',
      padding: '10px',
    },
  })

interface Props extends WithStyles<typeof styles> {
  geneSymbol: GeneSymbol
}

function GeneListElement(props: Props) {
  const { classes } = props;
  
  return (
    <Card className={classes.root}>
      <div>Gene Symbol:{props.geneSymbol.sid}</div>
      <div>
        Synonyms: 
        {props.geneSymbol.synonyms?.synonym?.map((maybeGene: Maybe<_GeneSymbolSynonyms>) => {
          return <Chip key={maybeGene?.GeneSymbol?.sid} label={maybeGene?.GeneSymbol?.sid}></Chip>
        })}
      </div>
    </Card>
  )
}

export default withStyles(styles)(GeneListElement)
