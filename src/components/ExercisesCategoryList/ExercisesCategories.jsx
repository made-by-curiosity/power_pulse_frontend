import {
  CategoriesList,
  CardLink,
  PaginationBtn,
  // LinkWrap,
  PaginationList,
  PaginationItem,
} from './ExercisesCategories.styled';
import { useEffect } from 'react';
import { useState } from 'react';

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

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const exercises = exercisesCategories?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(exercisesCategories?.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, index) => index + 1);
  console.log(numbers);

  const changeCurrentPage = n => {
    setCurrentPage(n);
  };

  useEffect(() => {
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

  console.log(exercisesCategories);

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
      <PaginationList>
        {numbers.map((n, i) => (
          <PaginationItem key={i}>
            <PaginationBtn
              onClick={() => changeCurrentPage(n)}
              active={n === currentPage}
            ></PaginationBtn>
          </PaginationItem>
        ))}
      </PaginationList>
      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet />
      </Suspense>
    </>
  );
};
