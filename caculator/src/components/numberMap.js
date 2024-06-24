import React from "react";
import Btn from "./btnNumber";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const NumberMap = ({numbers ,onClick}) => {
    return(
        <div className="row">
            {numbers.map(number => (
          <div key={number} className="col-3 ">
          <Btn number={number} onClick={onClick}/>
        </div>
         
          
        ))}
        </div>
    )
}

export default NumberMap;