import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

TextInput.propTypes = {
  name: PropTypes.any.isRequired,
  control: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  type: PropTypes.any,
  otherProps: PropTypes.object,
};

export default function TextInput({ name, control, errors, label, type, ...otherProps }) {
  return(
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField 
          label={label}
          type={type || 'text'}
          error={errors[name] ? true : false}
          helperText={errors[name]?.message}
          fullWidth 
          {...field} 
          {...otherProps}
        />
      )}
    />
  )
}