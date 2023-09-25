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
} from './ProductsTable.styled';

export default function ProductsTable() {
  const groupBlood = '3'

  const resData = mData.map((mDat)=> {
    return {
      Title: mDat.productId.title,
      Category: mDat.productId.category,
      Calories: mDat.productId.calories,
      Weight: mDat.productId.weight,
      Recommend: !mDat.productId.groupBloodNotAllowed[groupBlood],
    }
  })

  const data = useMemo(() => resData, [resData]);

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
        const nfoIn = nfo.getValue();
        if (nfoIn) {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#419B09',
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
              ></div>
              Yes
            </div>
          );
        } else {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#E9101D',
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
              ></div>
              No
            </div>
          );
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
