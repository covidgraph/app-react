import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useQuery } from "@apollo/client";
import { Paper } from "../../generated/graphql";
import { getPapers } from "./gql";
import { ROWS_PER_PAGE_OPTIONS } from "../../constants";
import { PageLoader, Title } from "../../components";
import { usePagination } from "../../hooks/usePagination";

interface PaperPageProps extends RouteComponentProps<any> {}

export const PaperPage: React.FunctionComponent<PaperPageProps> = (props) => {
  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("_hash_id");

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({
    initPage: props.match.params.page,
    initRowsPerPage: props.match.params.rowsPerPage,
    history: props.history,
    baseUrl: "/paper",
  });

  const { loading, data, error } = useQuery(getPapers, {
    variables: {
      first: rowsPerPage,
      offset: page * rowsPerPage,
      orderBy: orderBy + "_" + order,
      filter: () => {
        return {};
      },
    },
  });

  if (error) {
    return <Alert severity="error">Error, {error.message}</Alert>;
  }

  if (loading) {
    return <PageLoader isOpen={loading} />
  }

  if (data) {
    return (
        <>
          <Title>Paper List</Title>
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
    );
  }

  return <Alert severity="error">Error</Alert>;
};

export default PaperPage;