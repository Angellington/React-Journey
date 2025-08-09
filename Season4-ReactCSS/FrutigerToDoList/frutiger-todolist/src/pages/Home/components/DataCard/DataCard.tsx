import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';


const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  margin: '15px',
}));

const NameText = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  }));
  
  const MessageText = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  }));
  

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'flex-end',
}));

const DataCard = () => {
  return (
    <StyledCard>
      <NameText variant="h6" component="h2">
        Nome do Usuário
      </NameText>

      <MessageText variant="body2">
        Aqui vai a mensagem ou informação complementar que você quer mostrar.
      </MessageText>

      <ButtonsContainer>
        <Button variant="contained" color="primary" size="small">
          Editar
        </Button>
        <Button variant="contained" color="error" size="small">
          Deletar
        </Button>
      </ButtonsContainer>
    </StyledCard>
  );
};

export default DataCard;
