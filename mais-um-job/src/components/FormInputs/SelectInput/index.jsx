import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

SelectInput.propTypes = {
  name: PropTypes.any.isRequired,
  control: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
};


export default function SelectInput({ name, control, errors, label, items }) {
  return(
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl error={errors[name] ? true : false} fullWidth>
          <InputLabel id={`select-${name}`}>Área de Atuação</InputLabel>

          <Select
            labelId={`select-${name}`}
            label={label}
            {...field} 
          >
            {items.map((item) => (
                <MenuItem 
                  key={item.label} 
                  value={item.id}
                >
                  {item.label}
                </MenuItem>
              )
            )}
          </Select>
          
          {errors[name] &&
            <FormHelperText>{errors[name].message}</FormHelperText>
          }
        </FormControl>
      )}
    />
  )
}