import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import mData from './users.json';
import { useMemo } from 'react';
import ico from '../../assets/icons/svg-sprite.svg';

import {
  TitleColumn,
  TitleHead,
  RowTel,
  CellTel,
  SvgStyle,
  SvgTd,
  Headers,
  HeadersTitle,
} from './ExercisesTable.styled';

export default function ExercisesTable() {
  const qweData = mData.map((mDat) => {
    return { 
      "Recommend": !mDat.Recommend ? <div>a</div> : <div>b</div>
    }
  })
  console.log(qweData)

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
            <Headers key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <HeadersTitle key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </HeadersTitle>
              ))}
            </Headers>
          ))}
        </TitleHead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <RowTel key={row.id}>
              {row.getVisibleCells().map(cell => {
                console.log(cell.getValue())
                if(cell.getValue === false) {
                  return (<CellTel key={cell.id}>
                    <TitleColumn>{cell.column.id}</TitleColumn>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellTel>)
                }
                return (<CellTel key={cell.id}>
                  <TitleColumn>{cell.column.id}</TitleColumn>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTel>)
              })}
              <SvgTd>
                <SvgStyle>
                  <use href={ico + `#icon-trashtrue`}></use>
                </SvgStyle>
              </SvgTd>
            </RowTel>
          ))}
        </tbody>
      </table>
    </div>
  );
}
