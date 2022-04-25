import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';


function App() {

  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
       <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar /> 
        <Stack direction='row' spacing={1} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={ mode}/>
          <Feed />
          <Rightbar />
          </Stack>
          //adding new line
          <Add />   
        </Box>
        <Routes>
          <Route element={<Login />} path="/login" />
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
