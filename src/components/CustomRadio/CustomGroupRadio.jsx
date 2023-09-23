import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';

import { useField } from 'formik';

const formControlDefaultStyle = {
  mb: 2,
};

const formLabelDefaultStyle = {
  color: '#EFEDE8',
  fontSize: 14,
  '&.Mui-focused': {
    color: '#EFEDE8',
  },
};

const radioDefaultStyle = {
  color: 'rgb(239, 237, 232, 0.6)',
  '&.Mui-checked': {
    color: '#EF8964',
  },
};

const formControlLabelDefaultStyle = {
  mb: -1,
};

const typographyDefaultStyle = {
  fontSize: 14,
  lineHeight: 1.3,
};

export const CustomGroupRadio = ({
  label,
  formControlStyling,
  formLabelStyling,
  radioStyling,
  typographyStyling,
  formControlLabelStyling,
  radioGroupDirection,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <>
      <FormControl sx={{ ...formControlDefaultStyle, ...formControlStyling }}>
        <FormLabel
          id={field.name}
          sx={{ ...formLabelDefaultStyle, ...formLabelStyling }}
        >
          {label}
        </FormLabel>
        <RadioGroup {...field} row={radioGroupDirection}>
          {props.options.map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              sx={{
                ...formControlLabelDefaultStyle,
                ...formControlLabelStyling,
              }}
              control={
                <Radio
                  size="small"
                  sx={{ ...radioDefaultStyle, ...radioStyling }}
                />
              }
              label={
                <Typography
                  sx={{ ...typographyDefaultStyle, ...typographyStyling }}
                >
                  {option.label}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
