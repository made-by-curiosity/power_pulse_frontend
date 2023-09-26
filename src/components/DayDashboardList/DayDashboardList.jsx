import sprite from '../../assets/icons/svg-sprite.svg';
import {
  List,
  Item,
  Title,
  CardNameCont,
  Value,
  Imagen,
} from './DayDashboardList.styled';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const DayDashboardList = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <List>
      {data.map(({ icon, title, value, borderColor }, index) => {
        const color =
          index < 2 ? 'rgba(239, 237, 232, 0.8)' : 'rgba(239, 237, 232, 0.4)';

        const order =
          windowWidth >= 768 ? (index % 2 === 0 ? 1 : 2) : index + 1;

        return (
          <Item key={index} order={order} borderColor={borderColor}>
            <CardNameCont>
              <Imagen width="20" height="20">
                <use href={sprite + icon}></use>
              </Imagen>
              <Title color={color}>{title}</Title>
            </CardNameCont>
            <Value>
              {value}
              {index === 1 || index === 5 ? ' min' : ''}
            </Value>
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
      value: PropTypes.number.isRequired,
      borderColor: PropTypes.string,
    })
  ).isRequired,
};
