import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Pages/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
