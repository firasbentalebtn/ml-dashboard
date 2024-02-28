import { createTheme } from "@mui/material/styles";
import { CssBaseline,Box, ThemeProvider } from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar"
import Dashboard  from "@/scenes/dashboard";
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding=" 1rem 2rem 4rem 1rem">
            <Navbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/predictions" element={<div>predictions page</div>}/>

              </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
