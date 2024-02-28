import { Box, Button, Stack, Typography } from '@mui/material';
import {FormContainer, PasswordElement, TextFieldElement} from 'react-hook-form-mui'
import LinkRouter from '../../components/LinkRouter';

export default function Login(){
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

        <Typography variant='h5' fontWeight={600} sx={{width: "100%"}}>Acesse</Typography>

        <FormContainer
          defaultValues={{user: '', password: ''}}
          onSuccess={handleSubmit}
        >
          <Stack 
            spacing={2} 
            alignItems={'center'} 
            sx={{width: {sm:"400px", md:"550px"}}}
          >
            <TextFieldElement 
              name="user" 
              label="Usuário" 
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

            <Stack 
              sx={{width:'100%'}}
            >
              <LinkRouter 
                to='/forgot-password'
                underline="hover"
              >
                Esqueceu a senha?
              </LinkRouter>
            </Stack>
          
            <Button 
              type='submit' 
              color='main'
              variant='contained'
              fullWidth
            >
              Entrar
            </Button>
          </Stack>
        </FormContainer>

        <Stack 
          direction="row-reverse" 
          sx={{width:'100%'}}
        >
          <LinkRouter 
            to='/register' 
            underline="hover"
          >
            Não tenho uma conta
          </LinkRouter>
        </Stack>
      </Stack>
    </Box>
  )
}