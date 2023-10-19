import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup';
import PrivareComponent from './components/privatecomponent';
import Login from './components/login';
import AddProduct from './components/addproduct';
import ProductList from './components/productlist';
import UpdateProduct from './components/updateproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivareComponent/>}>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/update/:id" element={<UpdateProduct />}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        <Route path="/profile" element={<h1>Profile Needed</h1>}/>
        </Route>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
