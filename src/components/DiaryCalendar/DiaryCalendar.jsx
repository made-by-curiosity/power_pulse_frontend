import { forwardRef, useState } from 'react';
import sprite from '../../assets/icons/svg-sprite.svg';
import {
  TitleWrapper,
  CalendarIMG,
  DateSwitcherCont,
  DateSwitcherBtnCont,
} from './DiaryCalendar.styled';
import { format } from 'date-fns';
import { DateSwitchButton } from 'components/DateSwitchButton/DateSwitchButton';
import { Calendar } from 'components/Calendar/Calendar';

export const DiaryCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // eslint-disable-next-line
  const [isDisabled, setIsDisabled] = useState(false);

  const toPreviosDay = () => {
    const previosDate = new Date(selectedDate);
    previosDate.setDate(previosDate.getDate() - 1);

    setSelectedDate(previosDate);
  };

  const toNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);

    setSelectedDate(nextDate);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <DateSwitcherCont>
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(selectedDate, 'dd/MM/yyyy')}
          <CalendarIMG>
            <use href={sprite + '#icon-calendar'}></use>
          </CalendarIMG>
        </TitleWrapper>
        <DateSwitcherBtnCont>
          <DateSwitchButton
            onClick={toPreviosDay}
            disabled={isDisabled}
            color={isDisabled ? '#EFEDE833' : '#efede8'}
            icon="#icon-chevronup"
          />
          <DateSwitchButton onClick={toNextDay} icon="#icon-chevronup" />
        </DateSwitcherBtnCont>
      </DateSwitcherCont>
    );
  });

  return (
    <Calendar
      input={<CustomInput />}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};
