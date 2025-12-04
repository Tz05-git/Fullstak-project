
import './App.css';
import Login from './Components/auth/login';
import Register from './Components/auth/register';
import ProudctList from './Components/product/ProudctList'
import Admin from './Components/product/Admin';
import Layout from './Components/Shared/Layout'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css";    
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AdminAdd from './Components/product/AdnimAdd';
import EditProduct from './Components/product/EditProduct'
import BasketList from './Components/product/basket/basketList';
import UseAuth from './Components/auth/useAuth';




function App() {
  const roles="User"
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
            <Route path="/" element={<h1>home</h1>} />
        {<Route path="/login" element={<Login />} />}
       { <Route path="/register" element={<Register />} />}
        {<Route path="/my-product" element={<ProudctList/>} />}
        {roles==="Admin"&&<Route path="/AddProduct" element={<AdminAdd/>} />}
        <Route path="/admin" element={<Admin/>} />
        <Route path="/edit/:id" element={<EditProduct />} />
        {roles==="User"&& <Route path="/basket" element={<BasketList/>} />}

        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
