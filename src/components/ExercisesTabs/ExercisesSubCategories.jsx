import { CategoriesList, CardLink } from './ExercisesCategories.styled';
import { useEffect } from 'react';
import { useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { getAllExercises } from 'services/powerPulseApi';

import { BackLink } from 'components/BackLink/BackLink';
import { Loading } from 'components/Loading/Loading';


export const ExercisesSubCategories = () => {
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/exercises';

  const { filter } = useParams();
  const [exercisesSubCategories, setExercisesSubCategories] = useState(null);

 
  useEffect(() => {
    const exercisesList = async () => {
      try {
        const exercises = await getAllExercises();
        setExercisesSubCategories(exercises);
      } catch (error) {
        console.log(error.message);
      }
    };
    exercisesList();
  }, []);


  console.log(exercisesSubCategories);

  return (
    <>
    <BackLink to={backLinkRef}>Back</BackLink>
    <CategoriesList>
      {exercisesSubCategories?.map(card => (
        <CardLink key={card._id}>
          <li>{card.name}</li>
        </CardLink>
      ))}
    </CategoriesList>
    </> 
  );
};
