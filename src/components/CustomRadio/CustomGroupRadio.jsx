import { Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { RadioWrap, RadioGroupWrap} from "./CustomGroupRadio.styled";


import { useState } from "react";

export const CustomGroupRadio = ({formControlStyling, formLabelStyling, radioGroupDirection}) => {
    const [blood, setBlood] = useState("1");
    const [sex, setSex] = useState('male');
    const [level, setLevel] = useState('light');


    const formControlDefaultStyle = {
      mb:2
    }
    
    const formLabelDefaultStyle = {
        color: '#EFEDE8',
        fontSize: 14,
        '&.Mui-focused': {
        color: '#EFEDE8',
      }
      }

      const handleOnChange = event => {
        const { name, value } = event.currentTarget;
    
        switch (name) {
          case 'blood':
            setBlood(value);
            break;
          case 'sex':
            setSex(value);
            break;
          case 'level':
            setLevel(value);
            break;
          default:
            return;
        }
      };


    return (<FormControl sx={{...formControlDefaultStyle, ...formControlStyling}}>
        <RadioWrap>
            <RadioGroupWrap>
            <FormLabel id="blood" sx={{...formLabelDefaultStyle, ...formLabelStyling }}>Blood</FormLabel>
            <RadioGroup
                aria-labelledby="blood"
                name="blood"
                value={blood}
                row={radioGroupDirection}
                onChange={handleOnChange}
            >
            <FormControlLabel value="1" sx={{mb: -1}}  control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
                
              }}/>} label={
                <Typography sx={{ fontSize: 14 }}>
                  1
                </Typography>
              }/>
            <FormControlLabel value="2" sx={{mb: -1}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography sx={{ fontSize: 14 }}>
                  2
                </Typography>
              } />
            <FormControlLabel value="3" sx={{mb: -1}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography sx={{ fontSize: 14 }}>
                  3
                </Typography>
              } />
            <FormControlLabel value="4"  sx={{mb: -1}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography sx={{ fontSize: 14 }}>
                  4
                </Typography>
              } />
            </RadioGroup>
            </RadioGroupWrap>
            
            <RadioGroupWrap>
            <FormLabel id="sex" sx={{...formLabelDefaultStyle, ...formLabelStyling }}>Sex</FormLabel>
            <RadioGroup
                aria-labelledby="sex"
                name="sex"
                row={radioGroupDirection}
                value={sex}
                onChange={handleOnChange}
            >
                <FormControlLabel value="male" sx={{mb: -1}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography sx={{ fontSize: 14 }}>
                  Male
                </Typography>
              } />
                <FormControlLabel value="female" sx={{mb: -1}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography sx={{ fontSize: 14 }}>
                  Female
                </Typography>
              } />

            </RadioGroup>
            </RadioGroupWrap>
            
        </RadioWrap>
    

     <FormLabel id="level" sx={{...formLabelDefaultStyle, ...formLabelStyling }}>Level Activity:</FormLabel>
     <RadioGroup
         aria-labelledby="level"
         name="level"
         value={level}
         onChange={handleOnChange}
     >
         <FormControlLabel value="sedentary" sx={{mb:0.2}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>}  label={
                <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3}}>
                  Sedentary lifestyle (little or no physical activity)
                </Typography>
              } />
         <FormControlLabel value="light" sx={{mb:0.6}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3}}>
                  Light activity (light exercises/sports 1-3 days per week)
                </Typography>
              }/>
         <FormControlLabel value="very" sx={{mb:0.6}} control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3 }}>
                  Very active (intense exercises/sports 6-7 days per week)" 
                </Typography>
              } />
         <FormControlLabel value="extremely" control={<Radio size="small" sx={{
                color: 'rgb(239, 237, 232, 0.6)',
                '&.Mui-checked': {
                  color: "#EF8964",
                },
              }}/>} label={
                <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3}}>
                  Extremely active (very strenuous exercises/sports and physical work)
                </Typography>
              } />
     </RadioGroup>
    </FormControl>)
}