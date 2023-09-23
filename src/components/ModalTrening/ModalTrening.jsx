import { Backdrop } from '@mui/material';
import {
  BurnedCaloriesDiv,
  BurnedCaloriesNumber,
  BurnedCaloriesText,
  Button,
  ButtonAdd,
  DivTimer,
  ImgGif,
  ItemDiv,
  ItemTrening,
  ListTrening,
  Modal,
  NameItem,
  Svg,
  Text,
  ValueItem,
} from './ModalTrening.styled';
import icons from '../../assets/icons/svg-sprite.svg';


const example = {
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl:
    'https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif',
  name: '3/4 sit-up',
  target: 'abs',
  burnedCalories: 220,
  time: 3,
};

export const ModalTrening = () => {
  return (
    <Backdrop>
      <Modal>
        <ImgGif src={example.gifUrl} alt="" />
        <Text>Time</Text>
        <DivTimer></DivTimer>
        <Button type="button">
          <Svg>
            <svg fill="#EFEDE8">
              <use href={icons + '#icon-playbutton'}></use>
            </svg>
          </Svg>
        </Button>

        <BurnedCaloriesDiv>
          <BurnedCaloriesText>Burned calories:</BurnedCaloriesText>
          <BurnedCaloriesNumber>{example.burnedCalories}</BurnedCaloriesNumber>
        </BurnedCaloriesDiv>
        <ListTrening>
          {Object.entries(example).filter(([key, value]) => key !== 'gifUrl' && key !== 'burnedCalories').map(([key, value]) => (
            <ItemTrening>
              <ItemDiv>
                <NameItem>{key}</NameItem>
                <ValueItem>{value}</ValueItem>
              </ItemDiv>
            </ItemTrening>
          ))}
              
          {/* <ItemTrening>
            <ItemDiv>
              <NameItem>Name</NameItem>
              <ValueItem></ValueItem>
            </ItemDiv>
          </ItemTrening>
          <ItemTrening>
            <ItemDiv>
              <NameItem>Target</NameItem>
              <ValueItem></ValueItem>
            </ItemDiv>
          </ItemTrening>
          <ItemTrening>
            <ItemDiv>
              <NameItem>Body Part</NameItem>
              <ValueItem></ValueItem>
            </ItemDiv>
          </ItemTrening>
          <ItemTrening>
            <ItemDiv>
              <NameItem>Equipment</NameItem>
              <ValueItem></ValueItem>
            </ItemDiv>
          </ItemTrening>
          <ItemTrening>
            <ItemDiv>
              <NameItem>Time</NameItem>
              <ValueItem></ValueItem>
            </ItemDiv>
          </ItemTrening> */}
        </ListTrening>

        <ButtonAdd>Add to diary</ButtonAdd>
      </Modal>
    </Backdrop>
  );
};
