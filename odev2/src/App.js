import logo from './logo.svg';
import './App.css';
import gold from './image/gold.png';
import gri from './image/gri.png';
import pembe from './image/pembe.png';
import siyah from './image/siyah.png';
import {useState} from 'react';

function App () {
  const [color, setColor] = useState (0);

  // switch case ile de yapılabilir uzun yontem

  return (
    <div className="App">
      <div className="container">
        <div className="foto">
          <img
            src={
              color == 0 ? gold : color == 1 ? pembe : color == 2 ? siyah : gri
            }
          />
        </div>
        <div className="bilgi">
          <div className="model">IPhone 7 Plus</div>
          <div className="renk">
            <button
              onClick={() => {
                setColor (0);
              }}
            >
              Altın
            </button>
            <button
              onClick={() => {
                setColor (1);
              }}
            >
              Pembe
            </button>
            <button
              onClick={() => {
                setColor (2);
              }}
            >
              Siyah
            </button>
            <button
              onClick={() => {
                setColor (3);
              }}
            >
              Gri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
