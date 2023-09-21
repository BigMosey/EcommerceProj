import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { ProductDetails } from './pages/ProductDetails';
import { Sidebar} from './components/Sidebar';
import { Header} from './components/Header';
import { Footer} from './components/Footer';
import { SidebarProvider } from "./Contexts/SidebarContext";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ='/product/:id' element=
          {<ProductDetails/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Sidebar/>
        </SidebarProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
