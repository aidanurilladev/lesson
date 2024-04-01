import { Button } from "@mui/material";
import "./App.css";
import { Typography } from "./components/Typography";
import { Box } from "./components/Box";
import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  function handleButton(){
    i18n(
      
    )
  }
  return (
    <Box>
      <Typography>hello</Typography>
      <Button variant="contained">{t('Welcome')}</Button>
    </Box>
  );
}

export default App;
