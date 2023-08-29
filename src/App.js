import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Components/Product';
import Contact from './Components/Contact';
import About from './Components/About';
import FaceWash from './Components/Products/FaceWash';
import MainProduct from './Components/MainProduct';
import Itra1 from './Components/Products/Itra1';
import Itra2 from './Components/Products/itra2';
import Kadoxi from './Components/Products/Kadoxi';
import Kas from './Components/Products/Kas';
import Luk from './Components/Products/Luk';
import Levo from './Components/Products/Levo';
import Panto from './Components/Products/Panto';
import Shampoo from './Components/Products/Shampoo';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={<MainProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/facewash" element={<FaceWash />} />
        <Route path="/itra1" element={<Itra1 />  } />
        <Route path="/itra2" element={<Itra2 />  } />
        <Route path="/kadoxi" element={<Kadoxi />  } />
        <Route path="/kas" element={<Kas />  } />
        <Route path="/luk" element={<Luk />  } />
        <Route path="/levo" element={<Levo />  } />
        <Route path="/panto" element={<Panto />  } />
        <Route path="/shampoo" element={<Shampoo />  } />
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
