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
    label: 'Saúde'
  },
  {
    id: '2',
    label: 'Tecnologia da informação '
  },
  {
    id: '3',
    label: 'Construção civil'
  }
];

const mockLocal = [
  {
    id: '1',
    label: 'Crato'
  },
  {
    id: '2',
    label: 'Juazeiro do Norte'
  },
  {
    id: '3',
    label: 'Barbalha'
  }
];

export default function ProfessionalInputs({control, errors}) {
  return (
    <>
      <Grid item xs={12} md={4}>
        <SelectInput
          name="areaOfActivity"
          label="Área de Atuação"
          control={control}
          errors={errors}
          items={mockServices}
        />

      </Grid>

      <Grid item xs={12} md={4}>
        <SelectInput
          name="local"
          label="Cidade"
          control={control}
          errors={errors}
          items={mockLocal}
        />

      </Grid>

      <Grid item xs={12} md={4}>
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