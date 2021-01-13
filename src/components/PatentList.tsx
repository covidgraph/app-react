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
  Paper,
  TextField,
  Card,
  CardContent,
  Divider
} from '@material-ui/core'
import clsx from 'clsx'
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
      maxWidth: '100%',
      marginTop: theme.spacing(3),
      padding: theme.spacing(1),
      overflowX: 'auto',
      margin: 'auto',
    },
    table: {
      width: '60%',
      display: 'inline-block',
    },
    tableOpen: {
      width: '100%',
      display: 'inline-block',
    },
    textField: {
      float: 'left',
      marginRight: theme.spacing(1),
      minWidth: 300,
    },
    details: {
      width: '29%',
      display: 'inline-block',
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      float: 'right',
      position: 'absolute',
    },
    container: {
      paddingTop: '80px',
      width: '100%',
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
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ searchTermFilter: '' })
  const [currentDisplayInfo, setCurrentDisplayInfo] = React.useState("");
  const [open, setOpen] = React.useState(true)
  const [urlQueryParams] = React.useState(new URLSearchParams(window.location.search))

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

  React.useEffect(() => {
    setUrLQueryParams(page, rowsPerPage)
  }, [urlQueryParams])

  const setUrLQueryParams = (newPage: any, newRowsPerPage: any) => {
    urlQueryParams.set("page", newPage.toString());
    urlQueryParams.set("rowsPerPage", newRowsPerPage.toString());
    props.history.push(window.location.pathname + "?" + urlQueryParams.toString()); 
  }

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value
    setPage(0);
    setUrLQueryParams(0, rowsPerPage);
    resetMoreInformation();

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setUrLQueryParams(newPage, rowsPerPage);
    resetMoreInformation();
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setUrLQueryParams(0, event.target.value);
    resetMoreInformation();
  };

  const handleClick = (patent: Patent) => {
    if (!currentDisplayInfo) {
      setCurrentDisplayInfo(patent.lens_id);
      setOpen(false);
    } else if (currentDisplayInfo === patent.lens_id) {
      resetMoreInformation();
    } else {
      setCurrentDisplayInfo(patent.lens_id);
    }
  };

  const resetMoreInformation = () => {
    setCurrentDisplayInfo("");
    setOpen(true);
  }

  const moreInformation = (patentId: any) => {
    return (
      <Card className={classes.details} variant="outlined">
        <Title>Patent Details</Title>
        <CardContent>
            {data.Patent.filter((patent: Patent) => patent.lens_id === currentDisplayInfo).map((filteredPatent: Patent) => (
              <div key={filteredPatent?.lens_id}>
                {filteredPatent.titles ? distinctGeneSymbols(filteredPatent.titles).map((geneSymbol) => {
                    return <div key={geneSymbol.sid}>{geneSymbol.sid}</div>
                  }) : "n/a"}
                  <Divider variant="fullWidth" />
                  Lens ID: {filteredPatent.lens_id}
                  <Divider variant="fullWidth" />
                  Lens URL: {filteredPatent.lens_url}
                  <Divider variant="fullWidth" />
                  Filing Key: {filteredPatent.filing_key}
                  <Divider variant="fullWidth" />
                  Filing Date: {filteredPatent.filing_date}
                  <Divider variant="fullWidth" />
                  Jurisdiction: {filteredPatent.jurisdiction}
                  <Divider variant="fullWidth" />
                  Publication date: {filteredPatent.pub_date}
                  <Divider variant="fullWidth" />
                  Publication Key: {filteredPatent.pub_key}
                  <Divider variant="fullWidth" />
                  Type: {filteredPatent.type}
                  <Divider variant="fullWidth" />
                  Titles:
                  <br/>
                  {filteredPatent.titles?.map((patentTitles: Maybe<_PatentTitles>) => {
                    return (
                      <div key={patentTitles?._id}>
                        {patentTitles?.title?.lang}: {patentTitles?.title?.text}
                        <br/>
                      </div>
                    )
                  })}
              </div>
            ))}
        </CardContent>
      </Card>
    )
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
      <div className={classes.container}>
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <TableContainer className={clsx(classes.table, open && classes.tableOpen)} component={Card}>
          <Table>
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
                  <TableRow key={n.lens_id} onClick={(event: any) => handleClick(n)}>
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
        </TableContainer>
      )}

      {!open && moreInformation(currentDisplayInfo)}

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

export default withStyles(styles)(PatentList)
