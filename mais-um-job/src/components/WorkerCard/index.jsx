import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Avatar, Button } from '@mui/material';
import LinkRouter from '../../components/LinkRouter';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

WorkerCard.propTypes = {
    workerData: PropTypes.any.isRequired,
};


export default function WorkerCard({workerData}) {
    return(
        <>
            <Stack 
              spacing={2.5} 
              p={2.5} 
              alignItems={"center"} 
              sx={{
                border: `2px solid #908080`, 
                borderRadius: "10px"
              }}
            >
              <Avatar src="/broken-image.jpg" sx={{width: "100px", height: "100px"}}/>

              <Typography   textAlign="center"><Box component={'span'} fontWeight={600}>Nome: </Box>{workerData.name}</Typography>
              <Typography   textAlign="center"><Box component={'span'} fontWeight={600}>Profissão: </Box>{workerData.profession}</Typography>
              <Typography   textAlign="center"><Box component={'span'} fontWeight={600}>Cidade: </Box>{workerData.local}</Typography>

              <Typography   fontWeight={600} textAlign="center">Entre em contato pressionando</Typography>

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
              <Button color='main' component={Link} to='/profile' state={{workerData}}>Ver mais detalhes</Button>
            </Stack>
          

        
        
        </>


    );
    


}