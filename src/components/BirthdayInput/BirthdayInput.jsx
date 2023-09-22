import { forwardRef, useEffect, useState } from 'react';

import { format } from 'date-fns';
import { DateSwitchButton } from 'components/DateSwitchButton/DateSwitchButton';
import { Calendar } from 'components/Calendar/Calendar';

import { CustomInput } from 'components/CustomInput/CustomInput';

const today = new Date();
const INITIAL_DATE = new Date(today.toDateString());

export const BirthdayInput = ({ field, form, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(() => INITIAL_DATE);
  // eslint-disable-next-line

  useEffect(() => {
    if (selectedDate === INITIAL_DATE) {
      form.setFieldValue('birthday', '');
      return;
    }

    const formattedDate = format(selectedDate, 'yyyy-MM-dd');

    form.setFieldValue('birthday', formattedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

 

  const CustomBirthdayInput = forwardRef(({ value, onClick }, ref) => {
    const parts = value.split('/')
    const [month, day, year] = parts;
    const inputDate = `${day}.${month}.${year}`;

    return (
      <CustomInput
        reference={ref}
        label="Birthday"
        field={field}
        form={form}
        type="text"
        valueDate={inputDate}
        onClick={onClick}
        autoComplete="off"
        inputStyles={{ width: '160px' }}
        readOnly
      />
    );
  });

  return (
    <Calendar
      input={<CustomBirthdayInput />}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};
