
// Import MUI
import Stack from '@mui/material/Stack';

// Styles
import styles from './ActionsLayer.module.css'
import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';


const ActionsLayer = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
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
        >
          Adicionar
        </Button>
      </Stack>
    </Box>
  );
}

export default ActionsLayer