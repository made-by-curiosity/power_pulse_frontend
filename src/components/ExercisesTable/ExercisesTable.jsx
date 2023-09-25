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

  const resData = mData.map((mDat)=> {
    return {
      bodyPart: mDat.exerciseId.bodyPart,
      equipment: mDat.exerciseId.equipment,
      name: mDat.exerciseId.name,
      target: mDat.exerciseId.target,
      burnedCalories: mDat.exerciseId.burnedCalories,
      time: mDat.exerciseId.time,
    }
  })

  const data = useMemo(() => resData, [resData]);

  const columns = [
    {
      header: 'Body Part',
      accessorKey: 'bodyPart',
    },
    {
      header: 'Equipment',
      accessorKey: 'equipment',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Target',
      accessorKey: 'target',
    },
    {
      header: 'Burned Calories',
      accessorKey: 'burnedCalories',
    },
    {
      header: 'Time',
      accessorKey: 'time',
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
                return (
                  <CellTel key={cell.id}>
                    <TitleColumn>{cell.column.columnDef.header}</TitleColumn>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellTel>
                );
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
