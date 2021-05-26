import {ChangeEvent, MouseEvent, useState} from "react";

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

/**
 *
 * @param initPage
 * @param initRowsPerPage
 * @param history
 * @param baseUrl
 */
export const usePagination = ({initPage, initRowsPerPage, history, baseUrl}:usePaginationProps): usePaginationReturnType => {
    const [page, setPage] = useState<number>(initPage | 0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(initRowsPerPage | 25);

    /**
     *
     * @param newPage
     * @param newRowsPerPage
     */
    const setUrlQueryParams = (
        newPage: number,
        newRowsPerPage: number | ChangeEvent<HTMLInputElement>
    ) => {
        history.push(
            `${baseUrl}/${(newPage + 1).toString()}/${newRowsPerPage.toString()}`
        );
    };

    /**
     *
     * @param event
     * @param newPage
     */
    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
        setUrlQueryParams(newPage, rowsPerPage);
    };

    /**
     *
     * @param event
     */
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
