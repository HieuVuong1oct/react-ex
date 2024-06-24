import React  from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Btn = ({number,onClick}) => {
return(
    
            <button
              type="button"
              className="btn col-3 border border-secondary"
              onClick={() => onClick(number)}
            >
              {number}
            </button>
    
)
}

export default Btn;



