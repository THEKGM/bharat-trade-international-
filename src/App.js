import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Pages/Navbar/Navbar';
import ChooseUs from './components/Pages/ChooseUs/ChooseUs';
// import Home from './components/Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <div className='containerDiv'> */}
        {/* <Home /> */}
        <ChooseUs />
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
