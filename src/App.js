import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Products from './Pages/Home/Products/Products';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import StockUpdate from './Pages/StockUpdate/StockUpdate';
import Blogs from './Pages/Home/Blogs/Blogs';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import AddProduct from './Pages/AddProduct/AddProduct';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='update/:productId' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='blog/:blogId' element={<BlogDetail></BlogDetail>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
