import DatePicker from 'react-datepicker';
import { DatePickerWrapper } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

export const Calendar = ({ input, selectedDate, setSelectedDate }) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={input}
        calendarStartDay={1}
      />
    </DatePickerWrapper>
  );
};

Calendar.propTypes = {
  input: PropTypes.element.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
