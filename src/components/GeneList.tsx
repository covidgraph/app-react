import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Tooltip
} from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

import Title from './Title'
import { 
  Maybe,
  Gene,
  _GeneMapsGeneSymbols
} from '../generated/graphql'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      margin: 'auto',
    },
    table: {
      minWidth: 700,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 300,
    },
  })

const GET_GENES = gql`
  query genePaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_GeneOrdering]
    $filter: _GeneFilter
  ) {
    Gene(
      first: $first
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      sid,
      Feature_type,
      Full_name_from_nomenclature_authority,
      GeneID,
      LocusTag,
      Modification_date,
      Nomenclature_status,
      Other_designations,
      Symbol,
      Symbol_from_nomenclature_authority,
      Synonyms,
      chromosome,
      dbXrefs,
      description,
      map_location,
      name,
      source,
      tax_id,
      taxid,
      type_of_gene,
      mapsGeneSymbols{
        source,
        symbol{
          sid,
          status,
          taxid
        }
      }
    }
  }
`

function GeneList(props: any) {
  const { classes } = props
  const [order] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy] = React.useState('sid')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })

  const getFilter = () => {
    if (filterState.searchTermFilter.length > 0) {
    }
    return {
      OR: [
        {Full_name_from_nomenclature_authority_contains: filterState.searchTermFilter},
        {name_contains: filterState.searchTermFilter},
        {mapsGeneSymbols_some: {
          symbol: {
            sid_contains: "ACE2"
          }
        }}
      ],
    }
  }

  const { loading, data, error } = useQuery(GET_GENES, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + '_' + order,
      filter: getFilter(),
    },
  })

  // const handleSortRequest = (property: any) => {
  //   const newOrderBy = property
  //   let newOrder: SortDirection = 'desc'

  //   if (orderBy === property && order === 'desc') {
  //     newOrder = 'asc'
  //   }

  //   setOrder(newOrder)
  //   setOrderBy(newOrderBy)
  // }

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  return (
    <Paper className={classes.root}>
      <Title>Gene List</Title>
      <TextField
        id="search"
        label="Search"
        className={classes.textField}
        value={filterState.searchTermFilter}
        onChange={handleFilterChange('searchTermFilter')}
        margin="normal"
        variant="outlined"
        type="text"
        InputProps={{
          className: classes.input,
        }}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Gene Symbols</TableCell>
              <TableCell>SID</TableCell>
              <TableCell>Feature_type</TableCell>
              <TableCell>Full_name_from_nomenclature_authority</TableCell>
              <TableCell>GeneID</TableCell>
              <TableCell>LocusTag</TableCell>
              <TableCell>Modification_date</TableCell>
              <TableCell>Nomenclature_status</TableCell>
              <TableCell>Other_designations</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Symbol_from_nomenclature_authority</TableCell>
              <TableCell>Synonyms</TableCell>
              <TableCell>chromosome</TableCell>
              <TableCell>dbXrefs</TableCell>
              <TableCell>description</TableCell>
              <TableCell>map_location</TableCell>
              <TableCell>name</TableCell>
              <TableCell>source</TableCell>
              <TableCell>tax_id</TableCell>
              <TableCell>taxid</TableCell>
              <TableCell>type_of_gene</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Gene.map((n: Gene) => {
              return (
                <TableRow key={n.sid}>
                  <TableCell>{n.mapsGeneSymbols?.map((geneMapsGeneSymbols: Maybe<_GeneMapsGeneSymbols>) => {
                    return <Tooltip title={geneMapsGeneSymbols?.symbol?.status + " from " + geneMapsGeneSymbols?.source}>
                      <div>{geneMapsGeneSymbols?.symbol?.sid}</div>
                    </Tooltip>
                  })}</TableCell>
                  <TableCell>{n.sid}</TableCell>
                  <TableCell>{n.Feature_type}</TableCell>
                  <TableCell>{n.Full_name_from_nomenclature_authority}</TableCell>
                  <TableCell>{n.GeneID}</TableCell>
                  <TableCell>{n.LocusTag}</TableCell>
                  <TableCell>{n.Modification_date}</TableCell>
                  <TableCell>{n.Nomenclature_status}</TableCell>
                  <TableCell>{n.Other_designations}</TableCell>
                  <TableCell>{n.Symbol}</TableCell>
                  <TableCell>{n.Symbol_from_nomenclature_authority}</TableCell>
                  <TableCell>{n.Synonyms}</TableCell>
                  <TableCell>{n.chromosome}</TableCell>
                  <TableCell>{n.dbXrefs}</TableCell>
                  <TableCell>{n.description}</TableCell>
                  <TableCell>{n.map_location}</TableCell>
                  <TableCell>{n.name}</TableCell>
                  <TableCell>{n.source}</TableCell>
                  <TableCell>{n.tax_id}</TableCell>
                  <TableCell>{n.taxid}</TableCell>
                  <TableCell>{n.type_of_gene}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )
}

export default withStyles(styles)(GeneList)
