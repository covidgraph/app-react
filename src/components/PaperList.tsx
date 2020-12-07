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
  Paper as PaperUi,
  TableSortLabel,
  TextField,
} from '@material-ui/core'
import { useQuery, gql } from '@apollo/client';

import Title from './Title'
import { Paper } from '../types';

const styles = (theme: Theme) => createStyles({
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

const GET_PAPERS = gql`
  query paperPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PaperOrdering]
    $filter: _PaperFilter
  ) {
    Paper(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      _hash_id
      cord19fulltext_hash
      cord_uid
      journal
      publish_time
      source
      title
      url
    }
  }
`

function GeneList(props: any) {
  const { classes } = props
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = React.useState('_hash_id')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })

  const getFilter = () => {
    if (filterState.searchTermFilter.length > 0) {
      return {
        OR: [
          { title_contains: filterState.searchTermFilter }
        ]
      }
    }
    return {};
  }

  const { loading, data, error } = useQuery(GET_PAPERS, {
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

  return (
    <PaperUi className={classes.root}>
      <Title>Paper List</Title>
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
                key="_hash_id"
                sortDirection={orderBy === '_hash_id' ? order : false}
              >
                <div>hash id</div>
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>cord_uid</TableCell>
              <TableCell>journal</TableCell>
              <TableCell>publish_time</TableCell>
              <TableCell>source</TableCell>
              <TableCell>url</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Paper.map((n: Paper) => {
              return (
                <TableRow key={n._hash_id}>
                  <TableCell component="th" scope="row">
                    {n._hash_id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.cord_uid}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.journal}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.publish_time}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.source}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {n.url}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )
      }
    </PaperUi >
  )
}

export default withStyles(styles)(GeneList)
