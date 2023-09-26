import { ExercisesList, CardLink } from './ExercisesList.styled';
import { useEffect } from 'react';
import { useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { getAllExercises } from 'services/powerPulseApi';

import { BackLink } from 'components/BackLink/BackLink';

export const ExercisesListByCategory = () => {
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/exercises';

  const { filter } = useParams();
  const pathname = location.pathname.split('/');
  const category = pathname[2];

  const [exercisesSubCategories, setExercisesSubCategories] = useState(null);

  useEffect(() => {
    const exercisesList = async () => {
      try {
        const exercises = await getAllExercises();

        const filtredExercises = exercises.filter(
          exercise => exercise[category] === filter
        );

        setExercisesSubCategories(filtredExercises);
      } catch (error) {
        console.log(error.message);
      }
    };
    exercisesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  console.log(exercisesSubCategories);

  return (
    <>
      <BackLink to={backLinkRef}>Back</BackLink>
      <ExercisesList>
        {exercisesSubCategories?.map(card => (
          <CardLink key={card._id}>
            <li>{card.name}</li>
          </CardLink>
        ))}
      </ExercisesList>
    </>
  );
};
