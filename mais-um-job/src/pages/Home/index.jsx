import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import SelectInput from '../../components/FormInputs/SelectInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { searchWorkersSchema } from '../../validations/formSchemas';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import FloatingMenu from '../../components/FloatingMenu';

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

export default function Home() {
  const theme = useTheme();
  const isLogged = true; 

  const {
    control, 
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchWorkersSchema),
    defaultValues: {
      local: '', 
      areaOfActivity: '',
    }
  })

  const handleFetchData = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box 
        sx={{
          display: "flex",
          p: 3,
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: {xs: "center", sm: "flex-end"},
        }}
      >
        {isLogged ? (
          <FloatingMenu />  
        ) : (
          <>
            <Button component={Link} color='main' size='large' startIcon={<LoginRoundedIcon />} to='/login'>Entrar</Button>
            <Button component={Link} color='main' size='large' startIcon={<PersonAddAltRoundedIcon />} to='/register'>Cadastre-se</Button>
          </>
        )}
      </Box>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Stack 
          p={3}
          spacing={3}
          alignItems={'center'} 
          sx={{width: {sm:"500px", md:"750px"}}}
        >
          <img src="logo.svg" alt="Logo da Mais um Job" width={"300px"}/>

          <Typography 
            variant='h5' 
            color={theme.palette.main.main}
            textAlign="center"
            sx={{width: "100%"}}
          >
            A maior plataforma de negócios para trabalhadores autônomos do CARIRI
          </Typography>

          <SelectInput
            name="areaOfActivity"
            label="Selecione a Área de Atuação"
            control={control}
            errors={errors}
            items={mockServices}
          />

          <SelectInput
            name="local"
            label="Selecione a Cidade"
            control={control}
            errors={errors}
            items={mockLocal}
          />

          <Button variant="contained" color='main' size='large' endIcon={<SearchRoundedIcon />} onClick={handleSubmit(handleFetchData)}>
            Pesquisar
          </Button>
        </Stack>
      </Box>
    </>
  );
}