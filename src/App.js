import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import RequiredAuth from './Pages/Authentication/RequiredAuth';
import CheckoutPage from './Pages/Payment/CheckoutPage';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/tools/:_id' element={<RequiredAuth><CheckoutPage /></RequiredAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
