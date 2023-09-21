import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import mData from './users.json';
import { useMemo } from 'react';

import { TitleColumn, TitleHead, RowTel, CellTel } from './ProductsTable.styled';

export default function ProductsTable() {
  const data = useMemo(() => mData, []);

  const columns = [
    {
      header: 'Title',
      accessorKey: 'Title',
    },
    {
      header: 'Category',
      accessorKey: 'Category',
    },
    {
      header: 'Calories',
      accessorKey: 'Calories',
    },
    {
      header: 'Weight',
      accessorKey: 'Weight',
    },
    {
      header: 'Recommend',
      accessorKey: 'Recommend',
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <TitleHead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </TitleHead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <RowTel key={row.id}>
              {row.getVisibleCells().map(cell => (
                <CellTel key={cell.id}>
                    <TitleColumn>{cell.column.id}</TitleColumn>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTel>
              ))}
              <td>T</td>
            </RowTel>
          ))}
        </tbody>
      </table>
    </div>
  );
}
