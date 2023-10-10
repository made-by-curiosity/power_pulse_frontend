import {
  ExercisesList,
  ExercisesItem,
  InfoContainer,
  WorkoutTitle,
  Start,
  StartIcon,
  ExercisesContainer,
  ExercisesTitle,
  CaloriesIcon,
  DataInfo,
  MainExercisesContainer,
} from './ExercisesList.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import icons from '../../assets/icons/svg-sprite.svg';

import { useLocation, useParams, NavLink } from 'react-router-dom';

import { getAllExercises } from 'services/powerPulseApi';

import { BackLink } from 'components/BackLink/BackLink';

import { ModalTrening } from 'components/ModalTrening/ModalTrening';
import { Notify } from 'notiflix';
import { capitalizeString } from 'utils/capitalize';
import { ModalExercise } from 'components/ModalExercise/ModalExercise';

export const ExercisesListByCategory = () => {
  const [workoutDoneInfo, setWorkoutDoneInfo] = useState({
    time: 0,
    calories: 0,
  });

  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/exercises';

  const { filter } = useParams();
  const pathname = location.pathname.split('/');
  const category = pathname[2];

  const [exercisesSubCategories, setExercisesSubCategories] = useState(null);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const toogleModal = exercise => {
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
        Notify.failure('Ops...Something went wrong. Please try again.');
        console.log(error.message);
      }
    };
    exercisesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div style={{ position: 'relative' }}>
      <BackLink to={backLinkRef}>Back</BackLink>
      <MainExercisesContainer>
        <ExercisesList>
          {exercisesSubCategories?.map(card => (
            <ExercisesItem key={card._id}>
              <InfoContainer>
                <WorkoutTitle>WORKOUT</WorkoutTitle>
                <NavLink
                  style={{ display: 'flex', alignItems: 'center' }}
                  onClick={() => toogleModal(card)}
                >
                  <Start>Start</Start>
                  <StartIcon>
                    <svg fill="#efede8">
                      {' '}
                      <use href={icons + '#icon-nextarrow'}></use>
                    </svg>
                  </StartIcon>
                </NavLink>
              </InfoContainer>
              <ExercisesContainer>
                <CaloriesIcon>
                  <svg fill="#efede8">
                    {' '}
                    <use href={icons + '#icon-running'}></use>
                  </svg>
                </CaloriesIcon>
                <ExercisesTitle>{capitalizeString(card.name)}</ExercisesTitle>
              </ExercisesContainer>
              <DataInfo>
                <li>
                  Burned calories:
                  <span>{card.burnedCalories}</span>
                </li>
                <li>
                  Body part: <span>{capitalizeString(card.bodyPart)}</span>
                </li>
                <li>
                  Target:<span>{capitalizeString(card.target)}</span>
                </li>
              </DataInfo>
            </ExercisesItem>
          ))}
        </ExercisesList>
      </MainExercisesContainer>
      {isModalOpen && (
        <ModalTrening
          onToogle={toogleModal}
          exerciseInfo={selectedExercise}
          setIsSuccessOpen={() => setIsSuccessOpen(prevState => !prevState)}
          setWorkoutDoneInfo={setWorkoutDoneInfo}
        />
      )}
      {isSuccessOpen && (
        <ModalExercise
          onClose={() => setIsSuccessOpen(prevState => !prevState)}
          time={workoutDoneInfo.time}
          calories={workoutDoneInfo.calories}
        />
      )}
    </div>
  );
};
