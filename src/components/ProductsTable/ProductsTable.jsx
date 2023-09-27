import { useSelector } from 'react-redux';
import { selectUserParams } from 'redux/auth/selectors';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useMemo } from 'react';

import {
  TitleColumn,
  TitleHead,
  RowTel,
  CellTel,
  SvgTd,
  Headers,
  HeadersTitle,
  RecWrapper,
  RecYes,
  RecNo,
} from './ProductsTable.styled';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { deleteMeal } from 'services/powerPulseApi';
import { TableBody } from 'components/DayProducts/DayProducts.styled';

export default function ProductsTable({ meals, setMeals }) {
  const { blood } = useSelector(selectUserParams);

  const resData = useMemo(
    () =>
      meals.map(meal => {
        return {
          Title: meal.productId.title,
          Category: meal.productId.category,
          Calories: meal.productId.calories,
          Weight: meal.productId.weight,
          Recommend: !meal.productId.groupBloodNotAllowed[blood],
          id: meal._id,
        };
      }),
    [blood, meals]
  );

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
        if (nfo.getValue() === true) {
          return (
            <RecWrapper>
              <RecYes></RecYes>
              Yes
            </RecWrapper>
          );
        } else {
          return (
            <RecWrapper>
              <RecNo></RecNo>
              No
            </RecWrapper>
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

  const handleDelete = async id => {
    await deleteMeal(id);

    const filteredMeals = meals.filter(meal => meal._id !== id);
    setMeals(filteredMeals);
  };

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
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <RowTel key={row.id}>
              {row.getVisibleCells().map(cell => (
                <CellTel key={cell.id}>
                  <TitleColumn>{cell.column.id}</TitleColumn>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTel>
              ))}
              <SvgTd>
                <DeleteBtn id={row.original.id} handleDelete={handleDelete} />
              </SvgTd>
            </RowTel>
          ))}
        </TableBody>
      </table>
    </div>
  );
}
