import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import TonTrip from './Pages/TonTrip';
import Commande from './Pages/Commande';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tontrip" element={<TonTrip />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
