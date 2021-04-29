import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { Paper } from "../../generated/graphql";
import { getPageValue, getRowsPerPageValue } from "../../util/PaginationParams";
import { GET_PAPER } from "./gql";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

export const PaperPage: React.FunctionComponent = () => {
  const ROWS_PER_PAGE_OPTIONS = [1, 2, 5, 10, 20, 50, 100];
  const urlQueryParams = new URLSearchParams(window.location.search);

  let rowsPerPageInit = getRowsPerPageValue(20, ROWS_PER_PAGE_OPTIONS);
  let pageInit = getPageValue(0);

  const classes = useStyles();
  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("_hash_id");
  const [page, setPage] = useState(pageInit);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageInit);
  const [filterState, setFilterState] = useState({ searchTermFilter: "" });

  const getFilter = () => {
    return {};
  };

  const { loading, data, error } = useQuery(GET_PAPER, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + "_" + order,
      filter: getFilter(),
    },
  });

  if (error) {
    //@todo
    return <div>Error</div>;
  }

  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {data && !loading && !error && (
        <Table stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Paper.map((n: Paper) => (
              <TableRow key={n._hash_id}>
                <TableCell>{n.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
