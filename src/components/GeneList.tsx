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
  Tooltip,
  Card,
  CardContent,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import clsx from 'clsx'
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
    textField: {
      float: 'left',
      marginRight: theme.spacing(1),
      minWidth: 275,
    },
    detailsCard: {
      width: '37%',
      height: '95%',
      display: 'inline-block',
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      float: 'right',
      overflowY: 'scroll'
    },
    detailsCardContent: {
      overflowY: 'auto',
    },
    tableCell: {
      verticalAlign: "top",
    }
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
      transcripts{
        transcript{
          proteins{
            protein{
              sid,
              name
            }
          }
        }
      }
      mapsGeneSymbols{
        source,
        symbol{
          sid,
          status,
          taxid
        }
      }
      pathways{
        pathway{
          name
        }
      }
    }
  }
`

function GeneList(props: any) {
  const { classes } = props
  const [order] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy] = React.useState('sid')
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
    resetMoreInformation();
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setUrLQueryParams(0, event.target.value);
    resetMoreInformation();
  };

  const handleClick = (gene: Gene) => {
    if (!currentDisplayInfo) {
      setCurrentDisplayInfo(gene.sid);
      setOpen(false);
    } else if (currentDisplayInfo === gene.sid) {
      resetMoreInformation();
    } else {
      setCurrentDisplayInfo(gene.sid);
    }
  };

  const handleClose = () => {
    setOpen(true);
  };

  const resetMoreInformation = () => {
    setCurrentDisplayInfo("");
    setOpen(true);
  }

  const moreInformation = () => {
    return (
      <Card className={classes.detailsCard} variant="outlined">
        <Title>Gene Details</Title>
        <CardContent className={classes.detailsCardContent}>
          {detailedInformation()}
        </CardContent>
      </Card>
    )
  }

  const moreInformationFullScreen = () => {
    return (
      <Dialog
      fullScreen={fullScreen}
      open={!open && fullScreen}
      onClose={handleClick}
      aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"><Title>Gene Details</Title></DialogTitle>
        <DialogContent>
          <DialogContentText>
            {detailedInformation()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  const detailedInformation = () => {
    return (
      data.Gene.filter((gene: Gene) => gene.sid === currentDisplayInfo).map((filteredGene: Gene) => (
        <div key={filteredGene?.sid}>
          <Divider variant="fullWidth" />
          Gene Symbols:
          {filteredGene.mapsGeneSymbols?.map((geneMapsGeneSymbols: Maybe<_GeneMapsGeneSymbols>) => {
            return <Tooltip title={geneMapsGeneSymbols?.symbol?.status + " from " + geneMapsGeneSymbols?.source}>
              <div>{geneMapsGeneSymbols?.symbol?.sid}</div>
            </Tooltip>
          })}
          <Divider variant="fullWidth" />
          SID: {filteredGene.sid}
          <Divider variant="fullWidth" />
          Feature Type: {filteredGene.Feature_type}
          <Divider variant="fullWidth" />
          Full Name from Nomenclature Authority: {filteredGene.Full_name_from_nomenclature_authority}
          <Divider variant="fullWidth" />
          Gene ID: {filteredGene.GeneID}
          <Divider variant="fullWidth" />
          Locus Tag: {filteredGene.LocusTag}
          <Divider variant="fullWidth" />
          Modification Date: {filteredGene.Modification_date}
          <Divider variant="fullWidth" />
          Nomenclature Status: {filteredGene.Nomenclature_status}
          <Divider variant="fullWidth" />
          Other Designations: {filteredGene.Other_designations}
          <Divider variant="fullWidth" />
          Symbol: {filteredGene.Symbol}
          <Divider variant="fullWidth" />
          Symbol from Nomenclature Authority: {filteredGene.Symbol_from_nomenclature_authority}
          <Divider variant="fullWidth" />
          Synonyms: {filteredGene.Synonyms}
          <Divider variant="fullWidth" />
          Chromosome: {filteredGene.chromosome}
          <Divider variant="fullWidth" />
          DBxRefs: {filteredGene.dbXrefs}
          <Divider variant="fullWidth" />
          Description: {filteredGene.description}
          <Divider variant="fullWidth" />
          Map Location: {filteredGene.map_location}
          <Divider variant="fullWidth" />
          Name: {filteredGene.name}
          <Divider variant="fullWidth" />
          Source: {filteredGene.source}
          <Divider variant="fullWidth" />
          Tax ID: {filteredGene.tax_id}
          <Divider variant="fullWidth" />
          Tax ID: {filteredGene.taxid}
          <Divider variant="fullWidth" />
          Type of Gene: {filteredGene.type_of_gene}
          <Divider variant="fullWidth" />
          Pathways:
          {filteredGene.pathways?.map((pathways: any) => {
            return(
              <div>{pathways?.pathway.name}</div>
            )
          })}
          <Divider variant="fullWidth" />
          Proteins:
          {filteredGene.transcripts?.map((transcripts: any) => {
            return(
              <div>
                {transcripts?.transcript.proteins.map((protein: any) => {
                  return(
                    <div>SID:{protein.protein.sid}|name:{protein.protein.name}</div>
                  )
                })}
              </div>
            )
          })}
        </div>
      ))
    )
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
      <div className={classes.container}>
        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <TableContainer className={clsx(classes.table, open && classes.tableOpen)} component={Card}>
            <Table stickyHeader={true} style={{ tableLayout: "auto", whiteSpace: "nowrap"}}>
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
                  <TableCell>pathways</TableCell>
                  <TableCell>proteins</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.Gene.map((n: Gene) => {
                  return (
                    <TableRow key={n.sid} onClick={(event: any) => handleClick(n)}>
                      <TableCell className={classes.tableCell}>{n.mapsGeneSymbols?.map((geneMapsGeneSymbols: Maybe<_GeneMapsGeneSymbols>) => {
                        return <Tooltip title={geneMapsGeneSymbols?.symbol?.status + " from " + geneMapsGeneSymbols?.source}>
                          <div>{geneMapsGeneSymbols?.symbol?.sid}</div>
                        </Tooltip>
                      })}</TableCell>
                      <TableCell className={classes.tableCell}>{n.sid}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Feature_type}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Full_name_from_nomenclature_authority}</TableCell>
                      <TableCell className={classes.tableCell}>{n.GeneID}</TableCell>
                      <TableCell className={classes.tableCell}>{n.LocusTag}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Modification_date}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Nomenclature_status}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Other_designations}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Symbol}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Symbol_from_nomenclature_authority}</TableCell>
                      <TableCell className={classes.tableCell}>{n.Synonyms}</TableCell>
                      <TableCell className={classes.tableCell}>{n.chromosome}</TableCell>
                      <TableCell className={classes.tableCell}>{n.dbXrefs}</TableCell>
                      <TableCell className={classes.tableCell}>{n.description}</TableCell>
                      <TableCell className={classes.tableCell}>{n.map_location}</TableCell>
                      <TableCell className={classes.tableCell}>{n.name}</TableCell>
                      <TableCell className={classes.tableCell}>{n.source}</TableCell>
                      <TableCell className={classes.tableCell}>{n.tax_id}</TableCell>
                      <TableCell className={classes.tableCell}>{n.taxid}</TableCell>
                      <TableCell className={classes.tableCell}>{n.type_of_gene}</TableCell>
                      <TableCell className={classes.tableCell}>{n.pathways?.map((pathways: any) => {
                          return(<div>{pathways?.pathway.name}</div>)
                        })}
                      </TableCell>
                      <TableCell className={classes.tableCell}>{n.transcripts?.map((transcripts: any) => {
                          return(<div>
                              {transcripts?.transcript.proteins.map((protein: any) => {
                                return(<div>SID:{protein.protein.sid}|name:{protein.protein.name}</div>
                                )
                              })}
                            </div>)
                        })}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {!open && !fullScreen && moreInformation()}
        {!open && fullScreen && moreInformationFullScreen()}
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

export default withStyles(styles)(GeneList)
