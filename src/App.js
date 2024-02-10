import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './components/Context';
import Major from './components/Major';
import Birds from './components/Birds';
import Grains from './components/Grains';
import Inventory from './components/Inventory';
import Additives from './components/Additives';
import Universal from './components/Universal';
import Rabbits from './components/Rabbits';
import Pigs from './components/Pigs';
import Cattle from './components/Cattle';
import Pets from './components/Pets';
import Favorite from './components/Favorite';
import Admin from './components/Admin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Context>
        <div className="App">
          <div className="wrapper">
            <Routes>
              <Route path="*" element={<h1>page not found</h1>} />
              <Route path="/" element={<Major />}>
                <Route path="/birds" element={<Birds />} />
                <Route path="/grains" element={<Grains />} />
                <Route path="/universal" element={<Universal />} />
                <Route path="/rabbits" element={<Rabbits />} />
                <Route path="/pigs" element={<Pigs />} />
                <Route path="/cattle" element={<Cattle />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/additives" element={<Additives />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Context>
    </BrowserRouter>
  );
}

export default App;
