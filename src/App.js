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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProducts from './Pages/Dashboard/AddProducts';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import { ToastContainer } from 'react-toastify';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddReview from './Pages/Dashboard/AddReview';
import Payment from './Pages/Dashboard/Payment';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import NotFound from './Pages/Shared/NotFound';


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
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/tools/:_id' element={<RequiredAuth><CheckoutPage /></RequiredAuth>}></Route>
        <Route path='/addreview' element={<RequiredAuth><AddReview /></RequiredAuth>}></Route>
        <Route path='/dashboard' element={
          <Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:_id' element={<Payment></Payment>}></Route>
          <Route path='updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='manageproduct' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='manageorder' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addproduct' element={<AddProducts></AddProducts>}></Route>
          <Route path='manageuser' element={<ManageUsers></ManageUsers>}></Route>
        </Route>
      </Routes >
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </div >
  );
}

export default App;
