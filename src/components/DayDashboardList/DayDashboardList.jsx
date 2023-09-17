import sprite from '../../assets/icons/svg-sprite.svg';
import {
  List,
  Item,
  Title,
  CardNameCont,
  Value,
} from './DayDashboardList.styled';
import PropTypes from 'prop-types'

export const DayDashboardList = ({ data }) => {
  return (
    <List>
      {data.map(({ icon, title }, index) => {
        const color =
          index < 2 ? 'rgba(239, 237, 232, 0.8)' : 'rgba(239, 237, 232, 0.4)';

        const order =
          window.innerWidth >= 768 ? (index % 2 === 0 ? 1 : 2) : index + 1;

        return (
          <Item key={index} order={order}>
            <CardNameCont>
              <svg width="20" height="20">
                <use href={sprite + icon}></use>
              </svg>
              <Title color={color}>{title}</Title>
            </CardNameCont>
            <Value>{0}</Value>
          </Item>
        );
      })}
    </List>
  );
};

DayDashboardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
