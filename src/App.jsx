

import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import TonTrip from './Pages/TonTrip';
import Commande from './Pages/Commande';
import MixageImg from './components/MixageImg';
import Query from './components/Query';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tontrip" element={<TonTrip />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/query" element={<Query />} />
      </Routes>
      {/* <MixageImg /> */}
    </div>
  );
};
export default App;
