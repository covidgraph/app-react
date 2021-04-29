import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Paper as PaperUi,
  Card
} from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'
import {Title} from './Title/Title'

import {
  Paper
} from '../generated/graphql'
import SearchField from './SearchField/SearchField'
import { getPageValue, getRowsPerPageValue } from '../util/PaginationParams'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      height: '89%',
      marginTop: theme.spacing(1),
      padding: theme.spacing(1),
      overflowX: 'auto',
      overflowY: 'hidden',
      margin: 'auto',
    },
    container: {
      height: '85%',
      width: '100%',
      paddingTop: '80px',
    },
    table: {
      width: '100%',
      height: '95%',
      overflowY: 'scroll',
      display: 'inline-block',
    }
  })

const GET_PAPER = gql`
    query paperPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PaperOrdering]
    $filter: _PaperFilter
  ) {
    Paper(
      first: $first
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      _hash_id,
      title
    }
  }
`

function PaperList(props: any) {
  const ROWS_PER_PAGE_OPTIONS = [1, 2, 5, 10, 20, 50, 100];
  const urlQueryParams = new URLSearchParams(window.location.search);

  let rowsPerPageInit = getRowsPerPageValue(20, ROWS_PER_PAGE_OPTIONS);
  let pageInit = getPageValue(0);

  const { classes } = props
  const [order] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy] = React.useState('_hash_id')
  const [page, setPage] = React.useState(pageInit)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageInit)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })
  
  const getFilter = () => {
    return {}
  }

  const { loading, data, error } = useQuery(GET_PAPER, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + '_' + order,
      filter: getFilter(),
    },
  })
  const setUrlQueryParams = (newPage: any, newRowsPerPage: any) => {
    urlQueryParams.set("page", (newPage + 1).toString());
    urlQueryParams.set("rowsPerPage", newRowsPerPage.toString());
    props.history.push(window.location.pathname + "?" + urlQueryParams.toString()); 
  }

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value
    setPage(0);
    setUrlQueryParams(0, rowsPerPage);

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setUrlQueryParams(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setUrlQueryParams(0, event.target.value);
  };


  return (
    <PaperUi className={classes.root}>
      <Title>Paper List</Title>
      <SearchField
        value={filterState.searchTermFilter}
        onChange={handleFilterChange('searchTermFilter')}
      />
      <div className={classes.container}>
        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <TableContainer className={classes.table} component={Card}>
            <Table stickyHeader={true} style={{ tableLayout: "auto", whiteSpace: "nowrap"}}>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.Paper.map((n: Paper) => {
                  return (
                    <TableRow key={n._hash_id}>
                      <TableCell>{n.title}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

      </div>
    <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        component="div"
        count={-1}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </PaperUi>
  )
}

export default withStyles(styles)(PaperList)
