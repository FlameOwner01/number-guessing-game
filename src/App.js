import './style/style.css';
import Form from './components/inputForm'
import { useState } from 'react';

const App = () =>{
   
    const [inputNumber, setInputNumber] = useState("");
    
   

   return(
    <div>
        <h1>
        Number Guessing Game
        </h1>
        <Form setInputNumber ={setInputNumber} inputNumber={inputNumber} />
    </div>
 );
};

export default App;