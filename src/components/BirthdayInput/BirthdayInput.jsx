import { forwardRef, useEffect, useState } from 'react';

import { format } from 'date-fns';
import { DateSwitchButton } from 'components/DateSwitchButton/DateSwitchButton';
import { Calendar } from 'components/Calendar/Calendar';

import { CustomInput } from 'components/CustomInput/CustomInput';

export const BirthdayInput = ({ field, form, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  // eslint-disable-next-line

  useEffect(() => {
    form.setFieldValue('birthday', selectedDate);
  }, [selectedDate]);

  const CustomBirthdayInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <CustomInput
        reference={ref}
        label="Birthday"
        field={field}
        form={form}
        type="text"
        valueDate={value}
        onClick={onClick}
        autoComplete="off"
        inputStyles={{ width: '160px' }}
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
