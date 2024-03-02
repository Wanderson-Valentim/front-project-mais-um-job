import * as yup from 'yup';

export const personalSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
  confirmPassword: yup.string().required('A senha é obrigatória'),
  cpf: yup.string().required('O CPF é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  local: yup.string(),
  whatsapp: yup.string(),
  instagram: yup.string(),
});

export const professionalSchema = yup.object().shape({
  areaOfActivity: yup.string().required('A área de atuação é obrigatória'),
  profission: yup.string().required('A profissão é obrigatória'),
  description: yup.string().required('A descrição é obrigatória'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});