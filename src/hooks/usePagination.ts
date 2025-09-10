import { useState } from 'react';

export const usePagination = (itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPagedData = <T>(data: T[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (totalItems: number) => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  return {
    currentPage,
    itemsPerPage,
    handlePageChange,
    getPagedData,
    getTotalPages,
  };
};
