import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Grid, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { personalSchema, professionalSchema } from '../../validations/formSchemas';
import PersonalInputs from '../InputGroups/PersonalInputs';
import ProfessionalInputs from '../InputGroups/ProfessionalInputs';

const steps = ['Dados Pessoais', 'Dados do Serviço'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();

  const {
    control, 
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(activeStep === 0 ? personalSchema : professionalSchema),
    defaultValues: {
      name: '', 
      email: '', 
      password: '',
      confirmPassword: '',
      cpf: '', 
      phone: '',
      local: '', 
      whatsapp: '', 
      instagram: '',
      areaOfActivity: '',
      profission: '',
      description: '',
    }
  })

  const onSubmitPersonalData = () => {
    handleNext();
  }

  const onSubmitProfessionalData = (data) => {
    console.log(data);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{width: {xs:"80%", sm:"500px", md:"800px", lg:"1100px"}}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step 
              key={`${label}-${index}`} 
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: `${theme.palette.main.main}`, 
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: `${theme.palette.customBlack.main}`, 
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: `${theme.palette.main.main}`,
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: `${theme.palette.customBlack.main}`, 
                },
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Grid container spacing={2} my={4}>
        {activeStep === 0 ? (
          <PersonalInputs control={control} errors={errors} />
        ) : (
          <ProfessionalInputs control={control} errors={errors} />
        )}
      </Grid>
        
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="main"
          disabled={activeStep === 0}
          variant='contained'
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
        
        <Box sx={{ flex: '1 1 auto' }} />

        <Button 
          color='main' 
          variant='contained' 
          type='submit' 
          onClick={activeStep === 0 ? handleSubmit(onSubmitPersonalData) : handleSubmit(onSubmitProfessionalData)
        }>
          {activeStep === steps.length - 1 ? 'Cadastrar' : 'Próximo'}
        </Button>
      </Box>
    </Box>
  );
}