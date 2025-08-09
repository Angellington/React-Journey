import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';


const StyledCard = styled(Card)(({ theme }) => ({
  width: 350,
  height: 200,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2, 

  background: 'rgba(255, 255, 255, 0.2)', 
  backdropFilter: 'blur(10px) saturate(150%)', 
  WebkitBackdropFilter: 'blur(6px) saturate(150%)', 

  border: '1px solid rgba(255, 255, 255, 0.4)', 
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 

  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  overflow: 'auto',
}));




const NameText = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 'bold',
    color: '#fff',
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



const DataCard = ({id, name, description, onDelete, onEdit}) => {
  return (
    <StyledCard>
      <NameText variant="h6" component="h2">
        {name}
      </NameText>

      <MessageText variant="body2">
        {description}
      </MessageText>

      <ButtonsContainer>
        <Button variant="contained" color="primary" size="small" onClick={() => onEdit(id)} >
          Editar
        </Button>
        <Button variant="contained" color="error" size="small" onClick={() => onDelete(id)}>
          Deletar
        </Button>
      </ButtonsContainer>
    </StyledCard>
  );
};

export default DataCard;
