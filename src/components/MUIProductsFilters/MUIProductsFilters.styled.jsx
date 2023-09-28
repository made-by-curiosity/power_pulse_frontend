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
  stroke: ${props => props.theme.colors.primaryTitleColor};
`;

export const SelectWrapper = styled(FormControl)(
  () => `


`
);

export const Picker = styled(Select)(
  () => `
	

  border-radius: 12px;
  border: ${props => props.theme.colors.searchProductBorder};
  background: none;
  outline: none;

  color: ${props => props.theme.colors.primaryTitleColor};
  font-size: 14px;
  line-height: 1.29;

	@media screen and (min-width: 768px){
		font-size: 16px;
    line-height: 1.5;
		}

		

  &:hover .MuiOutlinedInput-notchedOutline,
  &:focus .MuiOutlinedInput-notchedOutline,
	&.Mui-focused .MuiOutlinedInput-notchedOutline{
		border: ${props => props.theme.colors.filterHoverBorder};

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

	color: ${props => props.theme.colors.primaryTitleColor};
	background-color: ${props => props.theme.colors.filterBgColor};
	
	&.MuiMenuItem-gutters.Mui-selected,
	&.Mui-selected,
	&.Mui-selected:hover{
		background-color: ${props => props.theme.colors.filterBgColor};
	}
	&:hover{
		background-color: ${props => props.theme.colors.filterBgColor};
	}

	&:hover,
		&:focus{
		color: ${props => props.theme.colors.filterHoverBorder};
		}

		color: ${props => props.theme.colors.primaryTitleColor};
  font-size: 14px;
  line-height: 1.29;

	@media screen and (min-width: 768px){
		font-size: 16px;
    line-height: 1.5;
		}
`
);
