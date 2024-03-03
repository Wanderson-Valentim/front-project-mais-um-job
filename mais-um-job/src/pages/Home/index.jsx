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
import WorkerCard from '../../components/WorkerCard';
import { useState } from 'react';

const mockWorkers = [
  {
    name: 'Maria Silva',
    phone: '88777777777',
    local: 'Crato', // Alterado para Crato
    whatsapp: '88777777777',
    instagram: '@maria_silva',
    profession: 'Qualquer', // Alterado para "Qualquer"
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis at arcu sollicitudin luctus. Nam fermentum lectus id nisl dignissim, eget posuere eros tempus.'
  },
  {
    name: 'Carlos Souza',
    phone: '88666666666',
    local: 'Juazeiro do Norte', // Alterado para Juazeiro do Norte
    whatsapp: '88666666666',
    instagram: '@carlos_souza',
    profession: 'Qualquer', // Alterado para "Qualquer"
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac felis libero. Maecenas laoreet dolor eget nunc maximus, et convallis est lacinia.'
  },
  {
    name: 'Ana Oliveira',
    phone: '88555555555',
    local: 'Barbalha', // Alterado para Barbalha
    whatsapp: '88555555555',
    instagram: '@ana_oliveira',
    profession: 'Qualquer', // Alterado para "Qualquer"
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet justo sed ante aliquam vehicula eget non purus.'
  },
  {
    name: 'Pedro Santos',
    phone: '88444444444',
    local: 'Crato', // Alterado para Crato
    whatsapp: '88444444444',
    instagram: '@pedro_santos',
    profession: 'Qualquer', // Alterado para "Qualquer"
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lectus ut metus dapibus iaculis.'
  },
  {
    name: 'Mariana Costa',
    phone: '88333333333',
    local: 'Juazeiro do Norte', // Alterado para Juazeiro do Norte
    whatsapp: '88333333333',
    instagram: '@mariana_costa',
    profession: 'Qualquer', // Alterado para "Qualquer"
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vitae sapien placerat, tincidunt magna et, suscipit orci.'
  },
  {
    name: 'João Oliveira',
    phone: '88222222222',
    local: 'Barbalha', // Alterado para Barbalha
    whatsapp: '88222222222',
    instagram: '@joao_oliveira',
    profession: 'Qualquer', // Alterado para "Qualquer"
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat, metus vel tempus sodales, quam nulla condimentum ligula, quis convallis lacus nibh sed dui.'
  }
];

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
  const [showResult,setShowResult]=useState(false);
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
    setShowResult(true);
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
          sx={{width: {sm:"550px", md:"900px"}}}
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
          {showResult &&
            <Box
              sx={{
                display: 'flex',
                gap: '15px',
                flexWrap:'wrap',
                justifyContent:'space-evenly'
              }}
            >
              {

                mockWorkers.map(worker=>(<WorkerCard workerData={worker} key={worker.name}/>))
              }
            </Box>
          }
        </Stack>
      </Box>
    </>
  );
}