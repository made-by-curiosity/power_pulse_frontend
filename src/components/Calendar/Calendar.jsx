import DatePicker from 'react-datepicker';
import { DatePickerWrapper } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { getYear, getMonth } from 'date-fns';
import { HeadCont, Select, HeadBtn } from './Calendar.styled';
import sprite from '../../assets/icons/svg-sprite.svg';

export const Calendar = ({ input, selectedDate, setSelectedDate }) => {
  

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };

  const years = range(1920, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <DatePickerWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <HeadCont>
            <HeadBtn
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              color={prevMonthButtonDisabled ? '#efede866' : '#efede8'}
            >
              <svg width="16" height="16">
                <use href={sprite + '#icon-chevronup'}></use>
              </svg>
            </HeadBtn>

            <Select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <HeadBtn
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              color={nextMonthButtonDisabled ? '#efede866' : '#efede8'}
            >
              <svg width="16" height="16">
                <use href={sprite + '#icon-chevronup'}></use>
              </svg>
            </HeadBtn>
          </HeadCont>
        )}
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
