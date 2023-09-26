import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
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
  RecWrapper,
  RecYes,
  RecNo,
} from './ProductsTable.styled';

export default function ProductsTable({ meals, blood }) {
  const resData = meals.map(mDat => {
    return {
      Title: mDat.productId.title,
      Category: mDat.productId.category,
      Calories: mDat.productId.calories,
      Weight: mDat.productId.weight,
      Recommend: !mDat.productId.groupBloodNotAllowed[blood],
      id: mDat._id,
    };
  });

  const data = useMemo(() => resData, []);

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
      cell: nfo => { 
        if (nfo.getValue() === true) {
          return (
            <RecWrapper>
              <RecYes></RecYes>
              Yes
            </RecWrapper>
          )
        } else {
          return (
            <RecWrapper>
              <RecNo></RecNo>
              No
            </RecWrapper>
          )
        }
      },
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
              {console.log(row)}
              {row.getVisibleCells().map(cell => (
                <CellTel key={cell.id}>
                  <TitleColumn>{cell.column.id}</TitleColumn>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTel>
              ))}
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
