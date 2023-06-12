import Context from './components/Context';
import Major from './components/Major';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <Context>
            <Major />
          </Context>
        </div>
      </div>
    </div>
  );
}

export default App;
