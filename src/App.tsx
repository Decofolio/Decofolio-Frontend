import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import PasswordChange from "./pages/PasswordChangePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/changePassword' element={<PasswordChange/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
