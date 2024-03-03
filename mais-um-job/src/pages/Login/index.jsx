import { Box, Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from '../../validations/formSchemas';
import TextInput from '../../components/FormInputs/TextInput';
import PasswordInput from '../../components/FormInputs/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import LinkRouter from '../../components/LinkRouter';

export default function Login(){
  const {
    control, 
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '', 
      password: '',
    }
  })
  const navigate = useNavigate();
  
  const submitLogin = (data) => {
    console.log(data);
    navigate("/");
  }

  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={4} alignItems={'center'}>
        <LinkRouter to="/">
          <img src="logo.svg" alt="Logo da Mais um Job" width={"150px"}/>
        </LinkRouter>

        <Typography variant='h5' fontWeight={600} sx={{width: "100%"}}>Acesse</Typography>

        <Stack 
          spacing={2} 
          alignItems={'center'} 
          sx={{width: {sm:"400px", md:"550px"}}}
        >
          <TextInput 
            name="email"
            control={control}
            errors={errors}
            label="Email"
            type="email"
          />

          <PasswordInput 
            name="password"
            control={control}
            errors={errors}
            label="Senha"
          />

          <Button 
            type='submit' 
            color='main'
            variant='contained'
            onClick={handleSubmit(submitLogin)}
            fullWidth
          >
            Entrar
          </Button>
        </Stack>

        <Stack 
          direction="row-reverse" 
          sx={{width:'100%'}}
        >
          <Button 
            component={Link}
            to='/register' 
            color='main'
          >
            Não tenho uma conta
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}