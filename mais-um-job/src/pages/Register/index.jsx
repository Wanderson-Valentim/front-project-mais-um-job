import { Box, Button, Stack, Typography } from '@mui/material';
import {FormContainer, PasswordElement, TextFieldElement, TextareaAutosizeElement} from 'react-hook-form-mui'
import LinkRouter from '../../components/LinkRouter';

export default function Register(){
  const handleSubmit = (data) => {
    console.log(data);
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
        <img src="logo.svg" alt="Logo da Mais um Job" width={"150px"}/>

        <Typography variant='h5' fontWeight={600} sx={{width: "100%"}}>Cadastre-se</Typography>

        <FormContainer
          defaultValues={{name: '', email: '', password: '', description: '', local: ''}}
          onSuccess={handleSubmit}
        >
          <Stack 
            spacing={2} 
            alignItems={'center'} 
            sx={{width: {sm:"400px", md:"550px"}}}
          >
            <TextFieldElement 
              name="name" 
              label="Nome" 
              type="text"
              fullWidth 
              required
            />

            <TextFieldElement 
              name="email" 
              label="Email" 
              type="email"
              fullWidth 
              required
            />

            <PasswordElement 
              name={'password'} 
              label={'Senha'} 
              fullWidth 
              required
            />

            <TextareaAutosizeElement
              label="Descrição"
              name="description"
              fullWidth
              required
            />
          
            <Button 
              type='submit' 
              color='main'
              variant='contained'
              fullWidth
            >
              Cadastrar
            </Button>
          </Stack>
        </FormContainer>

        <LinkRouter 
          to='/login' 
          underline="hover"
        >
          Já possuo uma conta
        </LinkRouter>
      </Stack>
    </Box>
  )
}