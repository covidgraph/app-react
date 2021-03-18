import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import GeneListElement from './GeneListElement'
import {
  Box,
  TablePagination,
  Paper,
  TextField
} from '@material-ui/core'
import clsx from 'clsx'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

import { 
  Maybe,
  Gene,
  _GeneMapsGeneSymbols,
  GeneSymbol
} from '../generated/graphql'

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
    elementList: {
      height: '100%',
      overflowY: 'scroll',
    },
    textField: {
      float: 'left',
      marginRight: theme.spacing(1),
      minWidth: 275,
    }
  })

const GET_GENE_SYMBOLS = gql`
  query geneSymbolPaginateQuery(
    $first: Int,
    $offset: Int
    $orderBy: [_GeneSymbolOrdering]
    $filter: _GeneSymbolFilter){
    GeneSymbol(
      first: $first,
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ){
      sid,
      synonyms{
        synonym{
          GeneSymbol{
            sid
          }
        }
      }
    }
  }
`

function GeneConnectionsList(props: any) {
  const { classes } = props
  const [order] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy] = React.useState('sid')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })
  const [urlQueryParams] = React.useState(new URLSearchParams(window.location.search))

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
    if (filterState.searchTermFilter.length > 0) {
    }
    return {
      // OR: [
      //   {Full_name_from_nomenclature_authority_contains: filterState.searchTermFilter},
      //   {name_contains: filterState.searchTermFilter},
      //   {mapsGeneSymbols_some: {
      //     symbol: {
      //       sid_contains: "ACE2"
      //     }
      //   }}
      // ],
    }
  }

  const { loading, data, error } = useQuery(GET_GENE_SYMBOLS, {
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

  const setUrLQueryParams = (newPage: any, newRowsPerPage: any) => {
    urlQueryParams.set("page", (newPage + 1).toString());
    urlQueryParams.set("rowsPerPage", newRowsPerPage.toString());
    props.history.push(window.location.pathname + "?" + urlQueryParams.toString()); 
  }

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value

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
      <div className={classes.container}>
        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <Box className={classes.elementList}>
            {data.GeneSymbol.map((geneSymbol: GeneSymbol) => {
              return <GeneListElement key={geneSymbol.sid} geneSymbol={geneSymbol}></GeneListElement>;
            })}
          </Box>
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
    </Paper>
  )
}

export default withStyles(styles)(GeneConnectionsList)
