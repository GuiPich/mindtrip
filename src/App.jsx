import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Commande from './Pages/Commande';
import Query from './components/Query';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tontrip" element={<Query />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
