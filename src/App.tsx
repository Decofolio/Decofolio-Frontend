import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/SignupPage";
import PasswordChange from "./pages/PasswordChangePage";
import Login from "./pages/Loginpage";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from 'styled-components';
import theme from "./style/Theme";
import WorkPage from "./pages/WorkPage";
import ModernTemplate from "./components/modernTemplate";
import ProjectDetailM from "./components/modernTemplate/projectDetailM";
import ScrollToTop from "./components/common/scrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
          <Route path='/work' element={<WorkPage />}></Route>
          <Route path='/changePassword' element={<PasswordChange />}></Route>
          <Route path='/modernTemplate' element={<ModernTemplate />}></Route>
          <Route path='/modernProjectDetail' element={<ProjectDetailM />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
