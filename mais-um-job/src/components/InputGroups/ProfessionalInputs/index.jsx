import { Grid } from "@mui/material"
import SelectInput from "../../FormInputs/SelectInput"
import TextInput from "../../FormInputs/TextInput";
import PropTypes from 'prop-types';

ProfessionalInputs.propTypes = {
  control: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
};

const mockServices = [
  {
    id: '1',
    label: 'Label 1'
  },
  {
    id: '2',
    label: 'label 2'
  }
];

export default function ProfessionalInputs({control, errors}) {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <SelectInput
          name="areaOfActivity"
          label="Área de Atuação"
          control={control}
          errors={errors}
          items={mockServices}
        >

        </SelectInput>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextInput
          name="profission"
          control={control}
          errors={errors}
          label="Profissão"
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          name="description"
          control={control}
          errors={errors}
          label="Descrição"
          multiline
        />
      </Grid>
    </>
  )
}