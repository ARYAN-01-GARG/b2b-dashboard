interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage, 
  totalItems 
}: PaginationProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-gray-600">
        Showing {startItem} to {endItem} of {totalItems} entries
      </span>
      <div className="flex space-x-2">
        <button 
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === currentPage 
                  ? "bg-green-500 text-white" 
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
        
        {totalPages > 5 && (
          <>
            <span className="px-3 py-1">...</span>
            <button 
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button 
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
