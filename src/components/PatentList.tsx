import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  SortDirection,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel,
  TextField,
} from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

import Title from './Title'

import {
  Maybe,
  Patent,
  _PatentTitles
} from '../generated/graphql'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 700,
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
      lens_id
      titles{
        _id,
        title{
          lang,
          text
        }
      }
    }
  }
`
// name
// patentTitle{
//   text
//   lang
// fragments{
//   _hash_id
//   mentions{
//     sid
//   }
// }
// }
// patentAbstract{
//   text
//   lang
// }

function PatentList(props: any) {
  const { classes } = props
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = React.useState('lens_id')
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

  const handleSortRequest = (property: any) => {
    const newOrderBy = property
    let newOrder: SortDirection = 'desc'

    if (orderBy === property && order === 'desc') {
      newOrder = 'asc'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  // const distinctGeneSymbols = (patentTitle: PatentTitle[]): GeneSymbol[] => {
  //   const geneSymbols = new Map<string, GeneSymbol>()
  //   patentTitle.forEach((title: PatentTitle) => {
  //     title.fromPatentTitle.forEach((fragment: Fragment) => {
  //       fragment.mentions.forEach((geneSymbol: GeneSymbol) => {
  //         geneSymbols.set(geneSymbol.sid, geneSymbol)
  //       })
  //     })
  //   })

  //   return Array.from(geneSymbols.values())
  // }

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
              <TableCell
                key="id"
                sortDirection={orderBy === 'patentId' ? order : false}
              >
                {/* <div>ID</div> */}
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'patentId'}
                    direction={order}
                    onClick={() => handleSortRequest('patentId')}
                  >
                    ID
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="title"
                sortDirection={orderBy === 'lang' ? order : false}
              >
                <div>Title</div>
              </TableCell>
              {/* <TableCell key="gene_symbols">
                <div>Gene Symbols</div>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Patent.map((n: Patent) => {
              return (
                <TableRow key={n.lens_id}>
                  <TableCell component="th" scope="row">
                    {n.lens_id}
                  </TableCell>
                  <TableCell>
                    {n.titles?.map((patentTitles: Maybe<_PatentTitles>) => {
                      return (
                        <div key={patentTitles?._id}>
                          {patentTitles?.title?.lang}: {patentTitles?.title?.text}
                        </div>
                      )
                    })}
                  </TableCell>
                  {/* <TableCell>
                    {distinctGeneSymbols(n.patentTitle).map((geneSymbol) => {
                      return <div key={geneSymbol.sid}>{geneSymbol.sid}</div>
                    })}
                  </TableCell> */}
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
