import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from './pages/Login/Login'
import Navbar from './components/Login/Navbar';
import Home from './pages/Dashboard/Dashboard';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (

    <Router>
      <header className="">
        <Navbar />
        <Fragment>
          {/* <Navbar/> */}
          <Navigation/>
        </Fragment>
      </header>
      <Footer/>
    </Router>

  );
}

function Navigation() {
  return(
  <Routes>
     {/* <Route exact path='/' element={<Home/>} /> */}
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/dashboard' element={<Dashboard />} />
  </Routes>
  )
}

export default App;
