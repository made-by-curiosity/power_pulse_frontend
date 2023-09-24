import {
  ExerciseCardWrapper,
  ExerciseDescription,
  ExerciseTitle,
  ExerciseText,
} from './ExerciseCard.styled';


export const ExerciseCard = () => {
  return (
    <ExerciseCardWrapper>
      <ExerciseDescription>
        <ExerciseTitle> Cardio
          <ExerciseText>Body Parts</ExerciseText>
        </ExerciseTitle>
      </ExerciseDescription>
    </ExerciseCardWrapper>
  );
};

export default ExerciseCard;
