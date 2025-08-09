import { Box, styled } from '@mui/material';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  color: theme.palette.text.primary,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(0),
  zIndex: 0,
  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("backgroundHome.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.90)',
    zIndex: -1,
  },
  '& > .content': {
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
}));

export default BackgroundContainer;