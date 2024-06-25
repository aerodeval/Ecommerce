import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavbarEz from './components/NavbarTop';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { FavProvider } from './FavContext';
import Favourites from './components/Favourites';
import Breadcrumbs from './components/Breadcrumbs';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {


  return (    <FavProvider>
    
    <div className="App">
      
<NavbarEz></NavbarEz>
             <Routes>
             <Route path='/'Component={HomePage} />
        <Route path="/SignUp" Component={SignUp}/>
        <Route path="/LogIn" Component={LoginPage}/>
        <Route path="/Favourites" Component={Favourites}/>
        <Route path="/Cart" Component={Cart}/>
        <Route path="/About" Component={About}/>
        <Route path="/Contact" Component={Contact}/>
        

        </Routes>
  
        <Footer></Footer>
    </div></FavProvider>
  );
}

export default App;
