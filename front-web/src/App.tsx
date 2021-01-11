import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Home from './Home';
import Navbar from './NavBar';
import Routes from './Routes';

function App() {
  return (
    <>
     <Routes />
     <ToastContainer />
    </>
  );
}

export default App;
