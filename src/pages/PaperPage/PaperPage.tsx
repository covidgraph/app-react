import React, { useState, ChangeEvent, MouseEvent  } from "react";
import { RouteComponentProps } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { Paper } from "../../generated/graphql";
import { getPageValue, getRowsPerPageValue } from "../../util/PaginationParams";
import { GET_PAPER } from "./gql";
import { ROWS_PER_PAGE_OPTIONS } from "./constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

interface PaperPageProps extends RouteComponentProps<any> {}

export const PaperPage: React.FunctionComponent<PaperPageProps> = (props) => {

  const urlQueryParams = new URLSearchParams(window.location.search);

  console.log(urlQueryParams);

  let rowsPerPageInit = getRowsPerPageValue(20, ROWS_PER_PAGE_OPTIONS);
  let pageInit = getPageValue(0);

  const classes = useStyles();
  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("_hash_id");
  const [page, setPage] = useState(pageInit);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageInit);

  const setUrlQueryParams = (newPage: number, newRowsPerPage: number | ChangeEvent<HTMLInputElement>) => {
    props.history.push(`/paper/${(newPage + 1).toString()}/${newRowsPerPage.toString()}`);
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    setUrlQueryParams(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const rowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(rowsPerPage);
    setPage(0);
    setUrlQueryParams(0, rowsPerPage);
  };

  const { loading, data, error } = useQuery(GET_PAPER, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + "_" + order,
      filter: () => {
        return {};
      },
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
          <>
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
            <TablePagination
                rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                component="div"
                count={-1}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>

      )}
    </div>
  );
};
