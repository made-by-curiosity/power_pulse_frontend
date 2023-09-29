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
} from './ExercisesTable.styled';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { deleteWorkout } from 'services/powerPulseApi';
import { TableBody } from 'components/DayProducts/DayProducts.styled';
import { Notify } from 'notiflix';

export default function ExercisesTable({ workouts, setWorkouts }) {
  const resData = useMemo(
    () =>
      workouts.map(workout => {
        return {
          bodyPart: workout.exerciseId.bodyPart,
          equipment: workout.exerciseId.equipment,
          name: workout.exerciseId.name,
          target: workout.exerciseId.target,
          burnedCalories: workout.exerciseId.burnedCalories,
          time: workout.exerciseId.time,
          id: workout._id,
        };
      }),
    [workouts]
  );

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

  const handleDelete = async id => {
    try {
      await deleteWorkout(id);

      const filteredWorkouts = workouts.filter(workout => workout._id !== id);
      setWorkouts(filteredWorkouts);
    } catch (error) {
      Notify.failure('Ops...Something went wrong. Please try again.');
    }
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
              {row.getVisibleCells().map(cell => {
                return (
                  <CellTel key={cell.id}>
                    <TitleColumn>{cell.column.columnDef.header}</TitleColumn>
                    <span data-crop="crop">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </CellTel>
                );
              })}
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
