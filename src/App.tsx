import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login/Login";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
