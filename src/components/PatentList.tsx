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
} from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

import Title from './Title'

import {
  Maybe,
  Patent,
  _PatentTitles,
  GeneSymbol,
  FromPatentTitle,
  _FromPatentTitleGeneSymbols
} from '../generated/graphql'

const styles = (theme: Theme) =>
  createStyles({
    root: {
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

const GET_PATENT = gql`
  query patentPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PatentOrdering]
    $filter: _PatentFilter
  ) {
    Patent(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      filing_key,
      filing_date,
      jurisdiction,
      lens_id,
      lens_url,
      pub_date,
      pub_key,
      type,
      titles{
        _id,
        title{
          lang,
          text,
          fragments{
            text,
            kind,
            sequence,
            geneSymbols{
              score,
              symbol{
                sid
              }
            }
          }
        }
      }
    }
  }
`

function PatentList(props: any) {
  const { classes } = props
  const [order] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy] = React.useState('lens_id')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })

  const getFilter = () => {
    if (filterState.searchTermFilter.length > 0) {
      return {
        OR: [
          { 
            titles_some: {
              title: {
                text_contains: filterState.searchTermFilter
              }
            }
          },
          { 
            titles_some: {
              title: {
                fragments_some: {
                  geneSymbols_some: {
                    symbol: {
                      sid_contains: filterState.searchTermFilter
                    }
                  }
                }
              }
            }
          }
        ],
      }
    }
    return {}
  }

  const { loading, data, error } = useQuery(GET_PATENT, {
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

  const distinctGeneSymbols = (patentTitles: Maybe<_PatentTitles>[]): GeneSymbol[] => {
    const geneSymbols = new Map<string, GeneSymbol>()
    
    patentTitles.forEach((title: Maybe<_PatentTitles>) => {
      title?.title?.fragments?.forEach((fragment: Maybe<FromPatentTitle>) => {
        fragment?.geneSymbols?.forEach((fromPatentTitleGeneSymbols: Maybe<_FromPatentTitleGeneSymbols>) => {
          if(fromPatentTitleGeneSymbols && fromPatentTitleGeneSymbols.symbol)
            geneSymbols.set(fromPatentTitleGeneSymbols.symbol?._id || "", fromPatentTitleGeneSymbols.symbol)
        })
      })
    })

    return Array.from(geneSymbols.values())
  }

  return (
    <Paper className={classes.root}>
      <Title>Patent List</Title>
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
              <TableCell>Lens ID</TableCell>
              <TableCell>Lens URL</TableCell>
              <TableCell>Filing Key</TableCell>
              <TableCell>Filing Date</TableCell>
              <TableCell>Jurisdiction</TableCell>
              <TableCell>Pub Date</TableCell>
              <TableCell>Pub Key</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Patent.map((n: Patent) => {
              return (
                <TableRow key={n.lens_id}>
                  <TableCell>
                    {n.titles ? distinctGeneSymbols(n.titles).map((geneSymbol) => {
                      return <div key={geneSymbol.sid}>{geneSymbol.sid}</div>
                    }) : "n/a"}
                  </TableCell>
                  <TableCell>{n.lens_id}</TableCell>
                  <TableCell>{n.lens_url}</TableCell>
                  <TableCell>{n.filing_key}</TableCell>
                  <TableCell>{n.filing_date}</TableCell>
                  <TableCell>{n.jurisdiction}</TableCell>
                  <TableCell>{n.pub_date}</TableCell>
                  <TableCell>{n.pub_key}</TableCell>
                  <TableCell>{n.type}</TableCell>
                  <TableCell>
                    {n.titles?.map((patentTitles: Maybe<_PatentTitles>) => {
                      return (
                        <div key={patentTitles?._id}>
                          {patentTitles?.title?.lang}: {patentTitles?.title?.text}
                        </div>
                      )
                    })}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )
}

export default withStyles(styles)(PatentList)
