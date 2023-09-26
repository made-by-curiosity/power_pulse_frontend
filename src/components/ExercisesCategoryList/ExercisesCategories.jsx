import { CategoriesList, CardLink } from './ExercisesCategories.styled';
import { useEffect } from 'react';
import { useState } from 'react';

import {Outlet, useLocation } from 'react-router-dom';
import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { Suspense } from 'react';

import { getExercisesCategory } from 'services/powerPulseApi';

import { Loading } from 'components/Loading/Loading';


export const ExercisesCategories = ({query}) => {
  const location = useLocation();
  
  const [exercisesCategories, setExercisesCategories] = useState(null);



  useEffect(() => {
    const bodyPartsList = async () => {
      try {
        const categories = await getExercisesCategory(query);
        setExercisesCategories(categories);
      } catch (error) {
        console.log(error.message);
      }
    };
    bodyPartsList();
  }, [query]);

  console.log(exercisesCategories);

  return (
    <>
      <CategoriesList>
        {exercisesCategories?.map(card => (
          <CardLink key={card._id} to={`${card.name}`} state={{ from: location }}>
            <li><ExerciseCard filter={card.filter} title={card.name} photo={card.imgURL}/></li>
          </CardLink>
        ))}
      </CategoriesList>
      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet />
      </Suspense>
    </>
    
  );
};
