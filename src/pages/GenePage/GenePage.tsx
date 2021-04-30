import React, { useState } from "react";
import GeneListElement from "../../components/GeneListElement";
import { Box, TablePagination } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { Title, SearchField, PageLoader } from "../../components";
import { Gene } from "../../generated/graphql";
import { getGenes } from "./gql";
import { ROWS_PER_PAGE_OPTIONS } from "./constants";
import Alert from "@material-ui/lab/Alert";
import { RouteComponentProps } from "react-router-dom";
import {usePagination} from "../../hooks/usePagination";

interface GenePageProps extends RouteComponentProps<any> {}

export const GenePage: React.FunctionComponent<GenePageProps> = (props) => {
  const [order] = useState<"asc" | "desc">("asc");
  const [orderBy] = useState("sid");
  const [filterState, setFilterState] = useState({
    searchTermFilter: "",
  });

  const {page, rowsPerPage, handleChangePage, handleChangeRowsPerPage} = usePagination({
    initPage: props.match.params.page,
    initRowsPerPage: props.match.params.rowsPerPage,
    history: props.history,
    baseUrl: '/gene'
  })

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
                <GeneListElement key={gene.sid} gene={gene} />
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
