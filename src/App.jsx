import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import TonTrip from './Pages/TonTrip';
import Commande from './Pages/Commande';

function App() {
  return (
    <div className="App">



      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tontrip" element={<TonTrip />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
    </div>
  );
}

export default App;
