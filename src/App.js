import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import Menu from "./components/nav/Menu";
import Home from "./pages/Home"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Toaster />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute />} />
      <Route path="" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
