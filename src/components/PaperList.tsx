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
  Card,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import clsx from 'clsx'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

import {
  Paper
} from '../generated/graphql'
import SearchField from './SearchField'

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
      width: '60%',
      height: '95%',
      overflowY: 'scroll',
      display: 'inline-block',
    },
    tableOpen: {
      width: '100%',
      height: '95%',
      overflowY: 'scroll',
      display: 'inline-block',
    },
    detailsCard: {
      width: '37%',
      height: '95%',
      display: 'inline-block',
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      float: 'right',
    },
    detailsCardContent: {
      overflowY: 'auto',
    },
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
  const { classes } = props
  const [order] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy] = React.useState('_hash_id')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })
  const [currentDisplayInfo, setCurrentDisplayInfo] = React.useState("");
  const [open, setOpen] = React.useState(true)
  const [urlQueryParams] = React.useState(new URLSearchParams(window.location.search))
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if(urlQueryParams.has("page")) {
      if(!isNaN(parseInt(urlQueryParams.get("page")!, 10) - 1)) {
        setPage(parseInt(urlQueryParams.get("page")!, 10) - 1);
      }
      else {
        urlQueryParams.set("page", (page + 1).toString());
      }
    }
    else {
      urlQueryParams.set("page", (page + 1).toString());
    }

    if(urlQueryParams.has("rowsPerPage")) {
      if(urlQueryParams.get("rowsPerPage")! !== "5" 
      && urlQueryParams.get("rowsPerPage")! !== "10" 
      && urlQueryParams.get("rowsPerPage")! !== "25") { 
        setRowsPerPage(10);
        urlQueryParams.set("rowsPerPage", "10");
      }
      else {
        setRowsPerPage(parseInt(urlQueryParams.get("rowsPerPage")!, 10));
      }
    }
    else {
      urlQueryParams.set("rowsPerPage", rowsPerPage.toString());
    }

    props.history.push(window.location.pathname + "?" + urlQueryParams.toString()); 
  }, [urlQueryParams, page, rowsPerPage, props.history])

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
  const setUrLQueryParams = (newPage: any, newRowsPerPage: any) => {
    urlQueryParams.set("page", (newPage + 1).toString());
    urlQueryParams.set("rowsPerPage", newRowsPerPage.toString());
    props.history.push(window.location.pathname + "?" + urlQueryParams.toString()); 
  }

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value
    setPage(0);
    setUrLQueryParams(0, rowsPerPage);

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setUrLQueryParams(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setUrLQueryParams(0, event.target.value);
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
          <TableContainer className={clsx(classes.table, open && classes.tableOpen)} component={Card}>
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
        rowsPerPageOptions={[5, 10, 25]}
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
