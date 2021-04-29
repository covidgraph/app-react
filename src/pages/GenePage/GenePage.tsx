import React, { ChangeEvent, useState } from "react";
import GeneListElement from "../../components/GeneListElement";
import { Box, TablePagination } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { Title, SearchField, PageLoader } from "../../components";
import { Gene } from "../../generated/graphql";
import { getGenes } from "./gql";
import { ROWS_PER_PAGE_OPTIONS } from "./constants";
import Alert from "@material-ui/lab/Alert";
import { RouteComponentProps } from "react-router-dom";

interface GenePageProps extends RouteComponentProps<any> {}

export const GenePage: React.FunctionComponent<GenePageProps> = (props) => {
  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("sid");
  const [page, setPage] = useState<number>(props.match.params.page | 0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    props.match.params.rowsPerPage | 20
  );

  const [filterState, setFilterState] = useState({
    searchTermFilter: "",
  });

  const getFilter = () => {
    if (filterState.searchTermFilter.length > 0) {
      return {
        OR: [
          {
            mapsGeneSymbols_some: {
              symbol: {
                sid_contains: filterState.searchTermFilter,
              },
            },
          },
        ],
      };
    }
  };

  const setUrlQueryParams = (
    newPage: number,
    newRowsPerPage: number | ChangeEvent<HTMLInputElement>
  ) => {
    props.history.push(
      `/gene/${(newPage + 1).toString()}/${newRowsPerPage.toString()}`
    );
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    setUrlQueryParams(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const rowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(rowsPerPage);
    setPage(0);
    setUrlQueryParams(0, rowsPerPage);
  };

  const handleFilterChange = (filterName: any) => (event: any) => {
    const val = event.target.value;

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }));
  };

  const { loading, data, error } = useQuery(getGenes, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + "_" + order,
      filter: getFilter(),
    },
  });

  if (error) {
    return <Alert severity="error">Error, {error.message}</Alert>;
  }

  return (
    <>
      <PageLoader isOpen={loading} />
      <Title>Gene List</Title>
      <SearchField
        value={filterState.searchTermFilter}
        onChange={handleFilterChange("searchTermFilter")}
      />
      <div>
        {data &&
          !loading &&
          !error &&
          ((data.Gene.length > 0 && (
            <Box>
              {data.Gene.map((gene: Gene) => (
                <div>Gene</div>
                // <GeneListElement key={gene.sid} gene={gene} />
              ))}
            </Box>
          )) || <p>No results</p>)}
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
    </>
  );
};
