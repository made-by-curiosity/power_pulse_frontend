import {
  ExerciseCardWrapper,
  ExerciseDescription,
  ExerciseTitle,
  ExerciseText,
} from './ExerciseCard.styled';

export const ExerciseCard = ({
  title = 'Cardio',
  filter = 'Body Part',
  photo,
}) => {
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

export default ExerciseCard;
