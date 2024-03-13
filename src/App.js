import { BrowserRouter, Routes ,  Route } from "react-router-dom";
import Navbar from './component/NavFooter/Navbar';
import Footer from './component/NavFooter/Footer';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Store from './component/pages/Store';
import Ajfc from './component/pages/Ajfc';
import Hospitality from './component/pages/Hospitality';
import Academy from './component/pages/Academy';


function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store />} />
        <Route path='/ajfc' element={<Ajfc/>} />
        <Route path='/hospitality' element={<Hospitality/>} />
        <Route path='/academy' element={<Academy/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
