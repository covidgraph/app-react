export const getRowsPerPageValue = (defaultValue: number, options: number[]): number => {
  const urlQueryParams = new URLSearchParams(window.location.search);
  let rowsPerPage = defaultValue;
  if(urlQueryParams.has("rowsPerPage") 
    && options.includes(parseInt(urlQueryParams.get("rowsPerPage")!))){
      rowsPerPage = parseInt(urlQueryParams.get("rowsPerPage")!);
  }
  return rowsPerPage
}

export const getPageValue = (defaultValue: number): number => {
  const urlQueryParams = new URLSearchParams(window.location.search);
  let page = defaultValue;
  if(urlQueryParams.has("page") 
      && !isNaN(parseInt(urlQueryParams.get("page")!, 10) - 1)){
        page = parseInt(urlQueryParams.get("page")!, 10) - 1;
  }
  return page;
}