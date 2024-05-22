import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavbarEz from './components/NavbarTop';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

function App() {


  return (
    <div className="App">
             <Routes>
             <Route path='/'Component={HomePage} />
        <Route path="/SignUp" Component={SignUp}/>
        <Route path="/LogIn" Component={LoginPage}/>

        </Routes>

    </div>
  );
}

export default App;
