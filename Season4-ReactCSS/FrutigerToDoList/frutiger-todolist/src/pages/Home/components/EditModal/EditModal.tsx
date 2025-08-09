import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Fade,
  styled
} from "@mui/material";

const StyledModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "rgba(255, 255, 255, 0.22)", // vidro translúcido
  backdropFilter: "blur(12px) saturate(100%)", // efeito de vidro
  WebkitBackdropFilter: "blur(12px) saturate(150%)", // suporte para Safari
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgba(255, 255, 255, 0.3)", // borda sutil
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  color: theme.palette.text.primary, // mantém contraste
}));


const EditModal = ({ open, onClose, data, onSave }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: ""
  });

  // Preenche o form quando receber "data"
  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || "",
        name: data.name || "",
        description: data.description || ""
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        sx: {
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
      }}
    >
      <Fade in={open}>
        <StyledModal>
          <Typography variant="h6" component="h2">
            Editar dados
          </Typography>
          <TextField
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Descrição"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button variant="outlined" color="error" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Salvar
            </Button>
          </Box>
        </StyledModal>
      </Fade>
    </Modal>
  );
};

export default EditModal;
