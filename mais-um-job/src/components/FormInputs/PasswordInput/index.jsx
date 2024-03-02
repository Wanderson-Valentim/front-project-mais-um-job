import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

PasswordInput.propTypes = {
  name: PropTypes.any.isRequired,
  control: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
};

export default function PasswordInput({name, label, errors, control}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return(
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl error={errors[name] ? true : false} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Mudar visibildiade da senha"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            {...field}
          />

          {errors[name] &&
            <FormHelperText>{errors[name].message}</FormHelperText>
          }
        </FormControl>
      )}
    />
  )
}