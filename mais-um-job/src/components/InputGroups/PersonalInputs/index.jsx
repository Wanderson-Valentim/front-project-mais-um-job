import { Grid } from "@mui/material"
import TextInput from "../../FormInputs/TextInput";
import PropTypes from 'prop-types';
import PasswordInput from "../../FormInputs/PasswordInput";

PersonalInputs.propTypes = {
  control: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
};

export default function PersonalInputs({control, errors}) {
  return (
    <>
      <Grid item xs={12}>
        <TextInput
          name="name"
          control={control}
          errors={errors}
          label="Nome Completo"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextInput
          name="email"
          control={control}
          errors={errors}
          label="Email"
          type='email'
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextInput
          name="cpf"
          control={control}
          errors={errors}
          label="Cpf"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <PasswordInput 
          name="password"
          control={control}
          errors={errors}
          label="Senha"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextInput
          name="confirmPassword"
          control={control}
          errors={errors}
          label="Confirmar Senha"
          type='password'
        />

      </Grid>

      <Grid item xs={12} sm={4}> 
        <TextInput
          name="instagram"
          control={control}
          errors={errors}
          label="@ Instagram"
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextInput
          name="whatsapp"
          control={control}
          errors={errors}
          label="Whatsapp"
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextInput
          name="phone"
          control={control}
          errors={errors}
          label="Telefone"
        />
      </Grid>
    </>
  )
}