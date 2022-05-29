import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/homePage/Home";
import Profile from "./pages/profilePage/Profile";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/messenger"
          element={user ? <Messenger /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
