import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Display from "./components/displayCal";
import NumberMap from "./components/numberMap";
function App() {
  const [display, setDisplay] = useState('0');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'+','-','/','%','x','^2','AC','DEL','=','CB2'];

  
  const handleNumberClick = (number) => {
    if(display === '0'){
      setDisplay(number.toString()); 
      
    }else if(number === 'AC'){
      setDisplay('0')
    }else if(number === 'DEL'){
      delDisplay();
    }else if(number === '='){
      calculate();
    }else if(number === 'CB2'){
      CB2();
    }else{
      setDisplay((display) => display + number.toString());
    }
    }
    
    const delDisplay = () => {
      if(display.length === 1 || display === '0'){
        setDisplay('0');
      }else{
        setDisplay((display) => display.slice(0,-1));
      }
      
      
    }
  
  
  const calculate = () => {
    let newDisplay = display.replace(/x/g,'*');
        newDisplay = newDisplay.replace(/\^2/g,'**2');
        newDisplay = newDisplay.replace(/--/g, '+');
        newDisplay = newDisplay.replace(/\+\+/g, '+');
    try{
      setDisplay(eval(newDisplay));
    }catch(error){
      setDisplay('error')
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
      <Display displayValue={display}/>
      <NumberMap numbers={numbers} onClick={handleNumberClick}/>
      {/* <div className="row">
        {numbers.map(number => (
          
          <div key={number} className="col-3 ">
            <Btn number={number} onClick={handleNumberClick}/>
          </div>
          
        ))}
        
      </div> */}
    </div>
  );
}

export default App;
