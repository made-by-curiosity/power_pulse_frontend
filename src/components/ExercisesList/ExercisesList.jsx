import { ExercisesList, CardLink, ExercisesListWrap } from './ExercisesList.styled';
import { useEffect } from 'react';
import { useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { getAllExercises } from 'services/powerPulseApi';

import { BackLink } from 'components/BackLink/BackLink';

import { ModalTrening } from 'components/ModalTrening/ModalTrening';

export const ExercisesListByCategory = () => {
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/exercises';

  const { filter } = useParams();
  const pathname = location.pathname.split('/');
  const category = pathname[2];

  const [exercisesSubCategories, setExercisesSubCategories] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);


  const toogleModal = (exercise) => {
    setIsModalOpen(prevState => !prevState);
    setSelectedExercise(exercise);
  };

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
    <ExercisesListWrap>
      <BackLink to={backLinkRef}>Back</BackLink>
      <ExercisesList>
        {exercisesSubCategories?.map(card => (
          <CardLink key={card._id} onClick={() => toogleModal(card)} >
            <li>{card.name}</li>
          </CardLink>
        ))}
      </ExercisesList>
    </ExercisesListWrap>
    {isModalOpen && <ModalTrening onToogle={toogleModal} example={selectedExercise} />}
    </>
  );
};
