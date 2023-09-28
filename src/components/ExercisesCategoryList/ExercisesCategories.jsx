import PropTypes from 'prop-types';

import {
  CategoriesList,
  CardLink,
  PaginationBtn,
  PaginationList,
  PaginationItem,
} from './ExercisesCategories.styled';
import { useEffect } from 'react';
import { useState } from 'react';

import icons from '../../assets/icons/svg-sprite.svg';

import { Outlet, useLocation } from 'react-router-dom';
import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { Suspense } from 'react';

import { getExercisesCategory } from 'services/powerPulseApi';

import { Loading } from 'components/Loading/Loading';
import { Notify } from 'notiflix';

export const ExercisesCategories = ({ query }) => {
  const location = useLocation();

  const [exercisesCategories, setExercisesCategories] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [recordsPerPage, setRecordsPage] = useState(10);

  
  // const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const exercises = exercisesCategories?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(exercisesCategories?.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, index) => index + 1);


  const changeCurrentPage = n => {
    setCurrentPage(n);
  };

  useEffect(() => {
    let widthScreen = window.innerWidth;
      if (widthScreen >= 768 && widthScreen < 1440 ) {
    setRecordsPage(9);
    }
    console.log(widthScreen);

    const CategoriesList = async () => {
      try {
        const categories = await getExercisesCategory(query);
        setExercisesCategories(categories);
      } catch (error) {
        Notify.failure("Ops...Something went wrong. Please try again.")
        console.log(error.message);
      }
    };
    CategoriesList();
  }, [query]);


  return (
    <>
      <CategoriesList>
        {exercises?.map(card => (
          <li key={card._id}>
            <CardLink to={`${card.name}`} state={{ from: location }}>
              <ExerciseCard
                filter={card.filter}
                title={card.name}
                photo={card.imgURL}
              />
            </CardLink>
          </li>
        ))}
      </CategoriesList>
      {/* <CustomPagination  numbers={numbers}/> */}
      {npage > 1 &&  <PaginationList>
        {numbers.map((n, i) => (
          <PaginationItem key={i}>
            <PaginationBtn
              onClick={() => changeCurrentPage(n)}
              active={n === currentPage}
            >{n === currentPage ? <svg width="14" height="14">
            <use href={icons + '#icon-pagination'} />
    </svg> : <svg width="14" height="14">
            <use href={icons + '#icon-ellipse'} />
    </svg>}</PaginationBtn>
          </PaginationItem>
        ))}
      </PaginationList>}
     
      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet />
      </Suspense>
    </>
  );
};



ExercisesCategories.propTypes = {
  query: PropTypes.string.isRequired,
}