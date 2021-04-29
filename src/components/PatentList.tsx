import React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
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
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import { useQuery, gql } from "@apollo/client";
import { Title } from "./Title/Title";

import {
  Maybe,
  Patent,
  _PatentTitles,
  GeneSymbol,
  FromPatentTitle,
  _FromPatentTitleGeneSymbols,
} from "../generated/graphql";
import SearchField from "./SearchField/SearchField";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
      height: "89%",
      marginTop: theme.spacing(1),
      padding: theme.spacing(1),
      overflowX: "auto",
      overflowY: "hidden",
      margin: "auto",
    },
    container: {
      height: "85%",
      width: "100%",
      paddingTop: "80px",
    },
    table: {
      width: "60%",
      height: "95%",
      overflowY: "scroll",
      display: "inline-block",
    },
    tableOpen: {
      width: "100%",
      height: "95%",
      overflowY: "scroll",
      display: "inline-block",
    },
    detailsCard: {
      width: "37%",
      height: "95%",
      display: "inline-block",
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      float: "right",
    },
    detailsCardContent: {
      overflowY: "auto",
    },
  });

const GET_PATENT = gql`
  query patentPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PatentOrdering]
    $filter: _PatentFilter
  ) {
    Patent(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      filing_key
      filing_date
      jurisdiction
      lens_id
      lens_url
      pub_date
      pub_key
      type
      titles {
        _id
        title {
          lang
          text
          fragments {
            text
            kind
            sequence
            geneSymbols {
              score
              symbol {
                sid
              }
            }
          }
        }
      }
    }
  }
`;

function PatentList(props: any) {
  const { classes } = props;
  const [order] = React.useState<"asc" | "desc">("asc");
  const [orderBy] = React.useState("lens_id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filterState, setFilterState] = React.useState({
    searchTermFilter: "",
  });
  const [currentDisplayInfo, setCurrentDisplayInfo] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [urlQueryParams] = React.useState(
    new URLSearchParams(window.location.search)
  );
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (urlQueryParams.has("page")) {
      if (!isNaN(parseInt(urlQueryParams.get("page")!, 10) - 1)) {
        setPage(parseInt(urlQueryParams.get("page")!, 10) - 1);
      } else {
        urlQueryParams.set("page", (page + 1).toString());
      }
    } else {
      urlQueryParams.set("page", (page + 1).toString());
    }

    if (urlQueryParams.has("rowsPerPage")) {
      if (
        urlQueryParams.get("rowsPerPage")! !== "5" &&
        urlQueryParams.get("rowsPerPage")! !== "10" &&
        urlQueryParams.get("rowsPerPage")! !== "25"
      ) {
        setRowsPerPage(10);
        urlQueryParams.set("rowsPerPage", "10");
      } else {
        setRowsPerPage(parseInt(urlQueryParams.get("rowsPerPage")!, 10));
      }
    } else {
      urlQueryParams.set("rowsPerPage", rowsPerPage.toString());
    }

    props.history.push(
      window.location.pathname + "?" + urlQueryParams.toString()
    );
  }, [urlQueryParams, page, rowsPerPage, props.history]);

  const getFilter = () => {
    if (filterState.searchTermFilter.length > 0) {
      return {
        OR: [
          {
            titles_some: {
              title: {
                text_contains: filterState.searchTermFilter,
              },
            },
          },
          {
            titles_some: {
              title: {
                fragments_some: {
                  geneSymbols_some: {
                    symbol: {
                      sid_contains: filterState.searchTermFilter,
                    },
                  },
                },
              },
            },
          },
        ],
      };
    }
    return {};
  };

  const { loading, data, error } = useQuery(GET_PATENT, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + "_" + order,
      filter: getFilter(),
    },
  });

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
    props.history.push(
      window.location.pathname + "?" + urlQueryParams.toString()
    );
  };

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value;
    setPage(0);
    setUrLQueryParams(0, rowsPerPage);
    resetMoreInformation();

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setUrLQueryParams(newPage, rowsPerPage);
    resetMoreInformation();
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const handleClose = () => {
    setOpen(true);
  };

  const resetMoreInformation = () => {
    setCurrentDisplayInfo("");
    setOpen(true);
  };

  const moreInformation = (patentId: any) => {
    return (
      <Card className={classes.detailsCard} variant="outlined">
        <Title>Patent Details</Title>
        <CardContent className={classes.detailsCardContent}>
          {detailedInformation(patentId)}
        </CardContent>
      </Card>
    );
  };

  const moreInformationFullScreen = (patentId: any) => {
    return (
      <Dialog
        fullScreen={fullScreen}
        open={!open && fullScreen}
        onClose={handleClick}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Title>Patent Details</Title>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{detailedInformation(patentId)}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const detailedInformation = (patentId: any) => {
    return data.Patent.filter(
      (patent: Patent) => patent.lens_id === currentDisplayInfo
    ).map((filteredPatent: Patent) => (
      <div key={filteredPatent?.lens_id}>
        {filteredPatent.titles
          ? distinctGeneSymbols(filteredPatent.titles).map((geneSymbol) => {
              return <div key={geneSymbol.sid}>{geneSymbol.sid}</div>;
            })
          : "n/a"}
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
        <br />
        {filteredPatent.titles?.map((patentTitles: Maybe<_PatentTitles>) => {
          return (
            <div key={patentTitles?._id}>
              {patentTitles?.title?.lang}: {patentTitles?.title?.text}
              <br />
            </div>
          );
        })}
      </div>
    ));
  };

  const distinctGeneSymbols = (
    patentTitles: Maybe<_PatentTitles>[]
  ): GeneSymbol[] => {
    const geneSymbols = new Map<string, GeneSymbol>();

    patentTitles.forEach((title: Maybe<_PatentTitles>) => {
      title?.title?.fragments?.forEach((fragment: Maybe<FromPatentTitle>) => {
        fragment?.geneSymbols?.forEach(
          (fromPatentTitleGeneSymbols: Maybe<_FromPatentTitleGeneSymbols>) => {
            if (fromPatentTitleGeneSymbols && fromPatentTitleGeneSymbols.symbol)
              geneSymbols.set(
                fromPatentTitleGeneSymbols.symbol?._id || "",
                fromPatentTitleGeneSymbols.symbol
              );
          }
        );
      });
    });

    return Array.from(geneSymbols.values());
  };

  return (
    <Paper className={classes.root}>
      <Title>Patent List</Title>
      <SearchField
        value={filterState.searchTermFilter}
        onChange={handleFilterChange("searchTermFilter")}
      />
      <div className={classes.container}>
        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <TableContainer
            className={clsx(classes.table, open && classes.tableOpen)}
            component={Card}
          >
            <Table
              stickyHeader={true}
              style={{ tableLayout: "auto", whiteSpace: "nowrap" }}
            >
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
                    <TableRow
                      key={n.lens_id}
                      onClick={(event: any) => handleClick(n)}
                    >
                      <TableCell>
                        {n.titles
                          ? distinctGeneSymbols(n.titles).map((geneSymbol) => {
                              return (
                                <div key={geneSymbol.sid}>{geneSymbol.sid}</div>
                              );
                            })
                          : "n/a"}
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
                              {patentTitles?.title?.lang}:{" "}
                              {patentTitles?.title?.text}
                            </div>
                          );
                        })}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {!open && !fullScreen && moreInformation(currentDisplayInfo)}
        {!open && fullScreen && moreInformationFullScreen(currentDisplayInfo)}
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
  );
}

export default withStyles(styles)(PatentList);
