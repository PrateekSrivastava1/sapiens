import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/profile/:username" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
