import { Box, Stack, Typography } from '@mui/material';
import LinkRouter from '../../components/LinkRouter';
import WorkerForm from '../../components/WorkerForm';

export default function Register(){
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

        <Typography 
          variant='h5' 
          fontWeight={600} 
          sx={{width: {xs:"80%", sm:"500px", md:"800px", lg:"1100px"}}}
        >
          Cadastre-se
        </Typography>

        <LinkRouter 
          to='/login' 
          underline="hover"
          sx={{width: {xs:"80%", sm:"500px", md:"800px", lg:"1100px"}}}
        >
          Já possui uma conta? Clique aqui
        </LinkRouter>

        <WorkerForm />
      </Stack>
    </Box>
  )
}