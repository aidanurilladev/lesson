import { Button } from "@mui/material";
import "./App.css";
import { Typography } from "./components/Typography";
import { Box } from "./components/Box";
import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  
  return (
    <Box>
      <Typography>hello</Typography>
      <Button variant="contained">{t('Welcome')}</Button>
      <Typography>
        hi 
      </Typography>
    </Box>
  );
}

export default App;
