import React, { useState, ChangeEvent  } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { Paper } from "../../generated/graphql";
import { GET_PAPER } from "./gql";
import { ROWS_PER_PAGE_OPTIONS } from "./constants";
import { PageLoader } from "../../components";

interface PaperPageProps extends RouteComponentProps<any> {}

export const PaperPage: React.FunctionComponent<PaperPageProps> = (props) => {

  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("_hash_id");
  const [page, setPage] = useState<number>(props.match.params.page | 0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(props.match.params.rowsPerPage | 20);

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
      <PageLoader isOpen={loading} />
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
