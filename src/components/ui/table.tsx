import type { ReactNode } from "react";

interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  render?: (item: T, index: number) => ReactNode;
}

interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (item: T, index: number) => void;
  className?: string;
}

export const Table = <T extends Record<string, unknown> & { id?: string | number }>({ 
  columns, 
  data, 
  onRowClick, 
  className = "" 
}: TableProps<T>) => (
  <div className={`overflow-x-auto border-2 border-[#A0A0A042] rounded-2xl ${className}`}>
    <table className="w-full bg-white">
      <thead>
        <tr className="border-b border-[#A0A0A042] rounded-2xl font-semibold text-gray-700">
          {columns.map((column) => (
            <th key={column.key} className="text-left py-4 px-4">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr 
            key={item.id || index} 
            className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
              onRowClick ? "cursor-pointer" : ""
            }`}
            onClick={() => onRowClick?.(item, index)}
          >
            {columns.map((column) => (
              <td key={`${item.id || index}-${column.key}`} className="py-4 px-4">
                {column.render ? column.render(item, index) : (item[column.key] as ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
