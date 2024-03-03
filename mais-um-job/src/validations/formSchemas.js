import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

export const personalSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
  confirmPassword: yup.string().required('A senha é obrigatória').oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
  cpf: yup.string().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, 'Formato de CPF inválido').required("CPF é obrigatório").test({message: 'CPF não é válido', test: (value) => cpf.isValid(value)}),
  phone: yup.string().matches(/^\d{11}$/, 'Formato de telefone inválido').required('O telefone é obrigatório'),
  whatsapp: yup.string(),
  instagram: yup.string(),
});

export const professionalSchema = yup.object().shape({
  areaOfActivity: yup.string().required('A área de atuação é obrigatória'),
  profession: yup.string().required('A profissão é obrigatória'),
  description: yup.string().required('A descrição é obrigatória'),
  local: yup.string().required('A cidade é obrigatória')
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

export const searchWorkersSchema = yup.object().shape({
  areaOfActivity: yup.string().required('A área de atuação é obrigatória'),
  local: yup.string().required('A cidade é obrigatória')
});