import styled from '@emotion/styled';

export const HeadCont = styled.div`
  margin: 0 auto 14px;
  display: flex;
  justify-content: center;
  gap: 3px;
  position: relative;
`;

export const Select = styled.select`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: transparent;
  outline: none;
  /* -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; */

  :focus {
    background-color: #ef8964;
  }
`;

export const HeadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 0;
  cursor: pointer;
  transform: rotate(270deg);

  svg {
    stroke: ${({ color }) => color};
    fill: none;
    stroke-width: 1.5px;
  }

  :last-of-type {
    transform: rotate(90deg);
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker__wrapper {
    position: absolute;
  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-15%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  // .react-datepicker__current-month {
  //   color: #efede8;
  //   font-family: 'Roboto', sans-serif;
  //   font-size: 16px;
  //   font-weight: 500;
  //   line-height: normal;
  //   margin-bottom: 14px;
  // }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;
