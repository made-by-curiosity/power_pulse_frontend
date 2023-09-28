import styled from '@emotion/styled';
import { FormControl, MenuItem, Select } from '@mui/material';
const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const ProductsFilterWrapper = styled.div`
  ${mq[1]} {
    display: flex;
    gap: 16px;
  }
`;

export const FilterInnerWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  ${mq[1]} {
    margin-top: 0px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const IconChevron = styled.svg`
  width: 18px;
  height: 18px;

  position: absolute;
  top: 17px;
  right: 14px;
  z-index: -1;

  stroke-width: 2px;
  stroke: #efede8;
`;

export const SelectWrapper = styled(FormControl)(
  () => `


`
);

export const Picker = styled(Select)(
  () => `
	

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: none;
  outline: none;

  color: #efede8;
  font-size: 14px;
  line-height: 1.29;

	@media screen and (min-width: 768px){
		font-size: 16px;
    line-height: 1.5;
		}

		

  &:hover .MuiOutlinedInput-notchedOutline,
  &:focus .MuiOutlinedInput-notchedOutline,
	&.Mui-focused .MuiOutlinedInput-notchedOutline{
		border: 1px solid #e6533c;

  }

	& #custom-input {
		padding: 14px;
		min-height: 0px
	}
`
);

export const Option = styled(MenuItem)(
  () => `
		
	padding:0;
	min-height: 0;

	color: #EFEDE8;
	background-color: #1C1C1C;
	
	&.MuiMenuItem-gutters.Mui-selected,
	&.Mui-selected,
	&.Mui-selected:hover{
		background-color: #1C1C1C;
	}
	&:hover{
		background-color: #1C1C1C;
	}

	&:hover,
		&:focus{
		color: #e6533c;
		}

		color: #efede8;
  font-size: 14px;
  line-height: 1.29;

	@media screen and (min-width: 768px){
		font-size: 16px;
    line-height: 1.5;
		}
`
);
