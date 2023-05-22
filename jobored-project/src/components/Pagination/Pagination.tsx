import { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { START_PAGE_INDEX } from 'constants/common.constants';
import { setParamsValue, useAppState } from 'store';
import { renderPaginationPage } from 'utils';

export const PaginationComponent = () => {
  const { state, dispatch } = useAppState();
  const [activePage, setPage] = useState(1);
  const [total, setTotal] = useState<number>(3);

  const handlePaginate = (page: number) => {
    setPage(page);
    dispatch(
      setParamsValue({
        ...state.params,
        page: page - START_PAGE_INDEX,
      }),
    );
  };

  useEffect(() => {
    function setPage() {
      if (state.data) {
        const total = renderPaginationPage(state.data.total, activePage);
        setTotal(total);
      }
    }
    setPage();
  }, [activePage, state.data]);

  return (
    <>
      {state.data && (
        <Pagination
          value={activePage}
          onChange={(e) => handlePaginate(e)}
          total={total}
          position="center"
          mb={24}
          sx={{ alignSelf: 'flex-end' }}
        />
      )}
    </>
  );
};
