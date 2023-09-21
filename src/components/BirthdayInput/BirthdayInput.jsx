import { forwardRef, useState } from 'react';


import { format } from 'date-fns';
import { DateSwitchButton } from 'components/DateSwitchButton/DateSwitchButton';
import { Calendar } from 'components/Calendar/Calendar';

import { CustomInput } from 'components/CustomInput/CustomInput';

export const BirthdayInput = ({ field, form, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  // eslint-disable-next-line
  
 

  const CustomBirthdayInput = forwardRef(({ value, onClick }, ref) => {
    return (
        <CustomInput reference={ref} 
        label="Birthday"
        field={field}
        form={form}
        type="text"
        valueDate={value}
        onClick={onClick}
        autoComplete="off"
        inputStyles={{ width: '160px' }}/>
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