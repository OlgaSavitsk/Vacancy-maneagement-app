import { useState } from "react";
import { Pagination } from '@mantine/core';
import { START_PAGE_INDEX } from 'constants/common.constants';
import { setParamsValue, useParams } from "store";

export const PaginationComponent = () => {
  const { state, dispatch } = useParams();
  const [activePage, setPage] = useState(1);

  const handlePaginate = (page: number) => {
    setPage(page);
    dispatch(
      setParamsValue({
        ...state.params,
        page: page - START_PAGE_INDEX,
      }),
    );
  };

  return (
    <Pagination
      value={activePage}
      onChange={(e) => handlePaginate(e)}
      total={3}
      position="center"
      mb={44}
      sx={{alignSelf: 'flex-end'}}
    />
  );
};
