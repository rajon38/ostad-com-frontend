import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import Menu from "./components/nav/Menu";
import Home from "./pages/Home"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './pages/user/Dashboard';
import AdminRoutes from './components/routes/AdminRoutes';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCategory from './pages/admin/Category';
import AdminProduct from './pages/admin/Product';

const PageNotFound = ()=>{
  return(
    <div className='d-flex justify-content-center align-items-center vh-100'>
      404| Page not found
    </div>
  )
}

const App=() => {
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

    <Route path="/dashboard" element= {<AdminRoutes />}>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/category" element={<AdminCategory />} />
      <Route path="admin/product" element={<AdminProduct />} />
    </Route>
    <Route path="*" element={<PageNotFound />} replace />
    </BrowserRouter>
  );
}

export default App;
