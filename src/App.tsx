import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Loginpage";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "styled-components";
import theme from "./style/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
