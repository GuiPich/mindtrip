import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Commande from './Pages/Commande';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Querry from './components/Query';
import Order from './Pages/Order';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tontrip" element={<Querry />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/order/:id" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
