import {
  ExerciseCardWrapper,
  ExerciseDescription,
  ExerciseTitle,
  ExerciseText,
} from './ExerciseCard.styled';

export const ExerciseCard = ({ title, filter, photo }) => {
  return (
    <ExerciseCardWrapper photo={photo}>
      <ExerciseDescription>
        <ExerciseTitle>
          {title}
          <ExerciseText>{filter}</ExerciseText>
        </ExerciseTitle>
      </ExerciseDescription>
    </ExerciseCardWrapper>
  );
};
