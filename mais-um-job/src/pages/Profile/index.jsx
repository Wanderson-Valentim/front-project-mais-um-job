import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar, Grid } from '@mui/material';
import FloatingMenu from '../../components/FloatingMenu';
import LinkRouter from '../../components/LinkRouter';
import styles from './styles.module.css'
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const mockUser = {
  name: 'Jose Jonas Acreano', 
  phone: '88999999999',
  local: 'Barbalha', 
  whatsapp: '88999999999', 
  instagram: '@user',
  profession: 'Pedreiro',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos maxime! Molestias impedit dicta in nisi, assumenda ab omnis ducimus consequatur saepe expedita mollitia atque cumque eaque dolores amet a.',
}

const mockImagens = [
  'https://blog.anageimoveis.com.br/wp-content/uploads/2013/04/CASAS6.jpg',
  'https://cdn6.campograndenews.com.br/uploads/noticias/2020/08/14/ba05f2f2be1b7ccf3d06b33b2573e79025ef6747.jpg',
  'https://governodeguajeru.ba.gov.br/fotos/02-06-2015-02-30-57.jpg',
  'https://www.chavesnamao.com.br/imn/0358x0250/N/imoveis/155392/8791600/sp-sorocaba-jardim-europa-estonia-casa-a-venda-5-quartos-62d95024-1.jpg',
  'https://resizedimgs.vivareal.com/crop/286x200/named.images.sp/1b6884bb9f9a5f3ac33a78562ffad6f0/foto-2-de-casa-de-condominio-com-4-quartos-a-venda-230m-em-antares-maceio.jpg',
]

export default function Profile(){
  const { state } = useLocation();
  const [showButton,setShowEditButton]=useState(!state?.workerData);
  const [userData] = useState(state?.workerData ? state.workerData : mockUser);

  return(
    <>
      <Box 
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <FloatingMenu />
      </Box>

      <Grid container spacing={2.5} p={4}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Stack 
              spacing={2.5} 
              p={2.5} 
              alignItems={"center"} 
              sx={{
                border: `2px solid #908080`, 
                borderRadius: "10px"
              }}
            >
              <Avatar src="/broken-image.jpg" sx={{width: "160px", height: "160px"}}/>

              <Typography variant='h6' textAlign="center"><Box component={'span'} fontWeight={600}>Nome: </Box>{userData.name}</Typography>
              <Typography variant='h6' textAlign="center"><Box component={'span'} fontWeight={600}>Profissão: </Box>{userData.profession}</Typography>
              <Typography variant='h6' textAlign="center"><Box component={'span'} fontWeight={600}>Cidade: </Box>{userData.local}</Typography>

              <Typography variant='h6' fontWeight={600} textAlign="center">Entre em contato pressionando</Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 3
                }}
              >
                <LinkRouter>
                  <img src="phone.svg" alt="" />
                </LinkRouter>
                <LinkRouter>
                  <img src="instagram.svg" alt="" />
                </LinkRouter>
                <LinkRouter>
                  <img src="whatsapp.svg" alt="" />
                </LinkRouter>
              </Box>
            </Stack>
            {
              showButton &&
            <Button variant='contained' color='main' size='large' fullWidth>Editar</Button>
            }
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <Typography variant='h5' fontWeight={600}>Descrição do Serviço</Typography>
            <Typography>{userData.description}</Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '15px',
                flexWrap: 'wrap',
              }}
            >
              <Typography variant='h5' fontWeight={600}>Imagens do Serviço</Typography>
              {
                showButton &&
              <Button 
                color='main'
                size='large'
                startIcon={<AddPhotoAlternateRoundedIcon />}
              >
                Adicionar Fotos
              </Button>
              }
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {mockImagens.map((url) => (
                <img className={styles.servicesImg} key={url} src={url} alt="" />
              ))}
            </Box>
          </Stack>
        </Grid>
      </Grid>

    </>
  )
}