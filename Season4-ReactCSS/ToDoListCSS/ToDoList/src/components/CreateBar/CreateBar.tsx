import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import style from "./CreateBar.module.css";

const CreateBar = () => {
  return (
    <>
      {/* <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </Stack> */}
      <Stack direction="row" spacing={2}>
        <Paper elevation={1} className={style.PaperStyle}>
          <p>Oi</p>
        </Paper>
        <Paper elevation={4} variant="outlined" className={style.PaperStyle}>
          <p>Oi</p>
        </Paper>
        <Paper elevation={4} square={false} variant="outlined" className={style.PaperStyle}>
          <p>Oi</p>
        </Paper>
        <Paper elevation={4} square={false} variant="outlined" className={style.PaperStyle}>
          <p>Oi</p>
        </Paper>
      </Stack>
    <MeuComponente>
        <Paper elevation={24}>
            <p>Olá</p>
        </Paper>
    </MeuComponente>
    </>


  );
};

type MeuComponenteProps = {
    children: React.ReactNode;
}

const MeuComponente: React.FC<MeuComponenteProps> = ({ children }) => (
    <div className={style.MeuComponente}>
        {children}
    </div>
)

export default CreateBar;
