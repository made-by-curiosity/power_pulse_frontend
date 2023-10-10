import { capitalizeString } from 'utils/capitalize';
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
          {capitalizeString(title)}
          <ExerciseText>{filter}</ExerciseText>
        </ExerciseTitle>
      </ExerciseDescription>
    </ExerciseCardWrapper>
  );
};
