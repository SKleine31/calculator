import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return <div className="Display">{dispValue}</div>;
}

function CalcButton({ buttonLabel, onClick, className = '' }) {
  return (
    <button className={`Button ${className}`} onClick={() => onClick(buttonLabel)}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setDisplay('0');
      return;
    }

    if (label === '=') {
      try {
        // Replace division and multiplication symbols for JavaScript eval
        const expression = display.replace(/÷/g, '/').replace(/×/g, '*');
        const result = eval(expression);
        setDisplay(String(result));
      } catch (error) {
        setDisplay('Error');
      }
      return;
    }

    // Append number or operator
    if (display === '0' || display === 'Error') {
      setDisplay(label);
    } else {
      setDisplay(display + label);
    }
  };

  return (
    <div className="App">
      <div className="Header">Calculator of SeanNunag - WMD3A</div>

      <div className="Calculator">
        <CalcDisplay dispValue={display} />

        <div className="Keypad">
          <CalcButton buttonLabel="7" onClick={handleButtonClick} />
          <CalcButton buttonLabel="8" onClick={handleButtonClick} />
          <CalcButton buttonLabel="9" onClick={handleButtonClick} />
          <CalcButton buttonLabel="÷" className="btn-operator" onClick={handleButtonClick} />

          <CalcButton buttonLabel="4" onClick={handleButtonClick} />
          <CalcButton buttonLabel="5" onClick={handleButtonClick} />
          <CalcButton buttonLabel="6" onClick={handleButtonClick} />
          <CalcButton buttonLabel="×" className="btn-operator" onClick={handleButtonClick} />

          <CalcButton buttonLabel="1" onClick={handleButtonClick} />
          <CalcButton buttonLabel="2" onClick={handleButtonClick} />
          <CalcButton buttonLabel="3" onClick={handleButtonClick} />
          <CalcButton buttonLabel="-" className="btn-operator" onClick={handleButtonClick} />

          <CalcButton buttonLabel="C" className="btn-clear" onClick={handleButtonClick} />
          <CalcButton buttonLabel="0" onClick={handleButtonClick} />
          <CalcButton buttonLabel="=" className="btn-equals" onClick={handleButtonClick} />
          <CalcButton buttonLabel="+" className="btn-operator" onClick={handleButtonClick} />
        </div>

        <div className="FooterTag">NUNAG</div>
      </div>
    </div>
  );
}

export default App;