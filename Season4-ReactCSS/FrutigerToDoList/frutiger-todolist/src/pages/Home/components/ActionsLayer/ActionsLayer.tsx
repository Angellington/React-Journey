
// Import MUI
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';
import Fade from '@mui/material/Fade';

// Styles
import styles from './ActionsLayer.module.css'
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';

// React
import { useState } from 'react';

const StyledModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));



const ActionsLayer = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(!open)
  }
  const handleClose = () => {
    setOpen(false)
  }


  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');

  const handleSend = () => {
    const stored = localStorage.getItem("objects");
    const objectsArray = stored ? JSON.parse(stored) : [];

    const newObj = {
      id: Date.now(),
      name: name,
      description: description,
    }
    
    objectsArray.push(newObj)
    localStorage.setItem("objects", JSON.stringify(objectsArray))


    setOpen(false);
    setName('');
    setDescription('')
  }

  return (
    <Box className={styles.backWrapper}>
      <Box className={styles.wrapper}>
        <Stack
          direction={isSmDown ? 'column' : 'row'}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '100%',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <TextField
            variant="outlined"
            label="Pesquisar"
            sx={{
              flex: isSmDown ? 'none' : 1,
              width: isSmDown ? '100%' : 'auto',
              minWidth: 200,
            }}
          />
          <Button
            color="primary"
            variant="outlined"
            sx={{
              width: isSmDown ? '100%' : 'auto',
            }}
            onClick={handleModalOpen}
          >
            Adicionar
          </Button>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(2px)',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }
        }}
      >
        <Fade in={open}>
          <StyledModal>
            <Typography id="modal-title" variant="h6" component="h2">
                Insira dado:
              </Typography>
              <TextField label="Nome" variant="outlined" id='name' fullWidth onChange={(e) => setName(e.target.value)} />
              <TextField label="Descrição" variant="outlined" id='description' fullWidth multiline rows={3}  onChange={(e) => setDescription(e.target.value)} />
              <Button color='success' variant='contained' onClick={handleSend}>Enviar</Button>
          </StyledModal>
        </Fade> 
      </Modal>

    </Box>
  );
}

export default ActionsLayer