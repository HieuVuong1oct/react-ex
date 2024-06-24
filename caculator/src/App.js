import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'+','-','/','%','x','^2','AC'];

  const handleNumberClick = (number) => {
    if(display === '0'){
      setDisplay(number.toString()); 
      
    }else{
      setDisplay((display) => display + number.toString());
      
    }
    if(number === 'AC'){
      setDisplay('0');
    }
  }

  const delDisplay = () => {
    setDisplay((display) => display.slice(0,-1));
    
  }

  const caculate = () => {
    if(display.includes('x')){
      const result = display.replace(/x/g,'*');
      setDisplay(eval(result));
      
    }else if(display.includes('^2')){
      const result = display.replace(/\^2/g,'**2');
      setDisplay(eval(result));
    }else if(display.includes('--')){
      const result = display.replace(/--/g, '+');
      setDisplay(eval(result));
    }else if(display.includes('++')){
      const result = display.replace(/\+\+/g, '+');
      setDisplay(eval(result));
    }else{
      setDisplay(eval(display));
    }
    
  }

  const CB2 = () => {
    const result = Math.sqrt(eval(display));
    setDisplay(result);
  }
  // const multiplication = () => {
  //   setDisplay((display) => display + '*')
  // }
  return (
    <div className="maytinh p-3 border border-secondary m-5">
      
      <div className="row p-3 border border-secondary" id="manhinh">{display}</div>
      <div className="row">
        {numbers.map(number => (
          
          <div key={number} className="col-3 ">
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          </div>
          
        ))}
        {/* <div className="col-3">
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() => setDisplay('0')}
            >
              AC
            </button>
          </div> */}

          <div className="col-3">
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() => delDisplay()}
            >
              DEL
            </button>
          </div>

          <div className="col-3">
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() => caculate()}
            >
              =
            </button>
          </div>

          <div className="col-3">
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() => CB2()}
            >
              CB2
            </button>
          </div>
          {/* <div className="col-3">
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() =>  multiplication()}
            >
              x
            </button>
          </div> */}
      </div>
    </div>
  );
}

export default App;
