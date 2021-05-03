import { ChangeEvent, useState, MouseEvent } from "react";

type usePaginationReturnType = {
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: any; // @todo - Can not get signature to match. leaving any for now.
};

interface usePaginationProps {
  initPage: number;
  initRowsPerPage: number;
  history: any;
  baseUrl: string;
}

export const usePagination = (
  props: usePaginationProps
): usePaginationReturnType => {
  const { initPage, initRowsPerPage, history, baseUrl } = props;
  const [page, setPage] = useState<number>(initPage | 0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(initRowsPerPage | 20);

  const setUrlQueryParams = (
    newPage: number,
    newRowsPerPage: number | ChangeEvent<HTMLInputElement>
  ) => {
    history.push(
      `${baseUrl}/${(newPage + 1).toString()}/${newRowsPerPage.toString()}`
    );
  };

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    setUrlQueryParams(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    const rowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(rowsPerPage);
    setPage(0);
    setUrlQueryParams(0, rowsPerPage);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
