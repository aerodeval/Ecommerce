import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavbarEz from './components/NavbarTop';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { FavProvider } from './FavContext';
import Favourites from './components/Favourites';

function App() {


  return (    <FavProvider>
    
    <div className="App">
             <Routes>
             <Route path='/'Component={HomePage} />
        <Route path="/SignUp" Component={SignUp}/>
        <Route path="/LogIn" Component={LoginPage}/>
        <Route path="/Favourites" Component={Favourites}/>

        </Routes>

    </div></FavProvider>
  );
}

export default App;
