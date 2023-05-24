
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import AddProducts from './pages/AddProducts'
import { ToastContainer } from 'react-toastify';
import Contact from './pages/Contact';
const username = sessionStorage.getItem('username');
function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Login' element={<Login />} /> 
           <Route path='/Home/*' element={<Home />} />
           <Route path='/contact' element={<Contact />} /> 
           {username === 'Renuka' && <Route path='/Addproducts' element={<AddProducts />}/>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
