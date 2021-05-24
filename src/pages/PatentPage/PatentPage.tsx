import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Card,
  CardContent,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import clsx from "clsx";
import { useQuery } from "@apollo/client";
import { getPatent } from "../../gql";

import {
  Maybe,
  Patent,
  _PatentTitles,
  GeneSymbol,
  FromPatentTitle,
  _FromPatentTitleGeneSymbols,
} from "../../generated/graphql";

import { Title } from "../../components";
import { RouteComponentProps } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import {ROWS_PER_PAGE_OPTIONS} from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
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
  })
);

interface PatentPageProps extends RouteComponentProps<any> {}

export const PatentPage: React.FunctionComponent<PatentPageProps> = (props) => {
  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("lens_id");

  const [filterState, setFilterState] = useState({
    searchTermFilter: "",
  });

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({
    initPage: props.match.params.page,
    initRowsPerPage: props.match.params.rowsPerPage,
    history: props.history,
    baseUrl: "/patents",
  });

  const [currentDisplayInfo, setCurrentDisplayInfo] = useState("");
  const [open, setOpen] = useState(true);
  const classes = useStyles();

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

  const { loading, data, error } = useQuery(getPatent, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + "_" + order,
      filter: getFilter(),
    },
  });

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
        fullScreen={true}
        open={!open}
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

  console.log(rowsPerPage);

  return (
    <div>
      <Title>Patent List</Title>
      {/*<SearchField*/}
      {/*  value={filterState.searchTermFilter}*/}
      {/*  onChange={handleFilterChange("searchTermFilter")}*/}
      {/*/>*/}
      <div className={classes.container}>
        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <TableContainer
            className={clsx(classes.table, open && classes.tableOpen)}
            component={Card}
          >
            <Table stickyHeader={true}>
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

        {!open && moreInformation(currentDisplayInfo)}
        {!open && moreInformationFullScreen(currentDisplayInfo)}
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
    </div>
  );
};

export default PatentPage;
