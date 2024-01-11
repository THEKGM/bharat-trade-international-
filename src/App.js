import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./components/containers/style.css"
import Navbar from './components/containers/Navbar';
import Home from './components/containers/Home';
// import Navbar from './components/Pages/Navbar/Navbar';
// import Home from './components/Pages/Home/Home';
// import Connection from './components/Pages/Connection/Connection';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar />
        <Home />
        <Connection /> */}
        <Navbar />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
