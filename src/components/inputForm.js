import { useState} from "react";
var number = Math.floor(Math.random() * 100) +1;
console.log(number);
        

const Form = ({ setInputNumber, inputNumber}) =>{

    const [message, setMessage] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [showParagraph, setShowParagraph] = useState(false);
    const [counter, setCounter] = useState(10);
    const [previousArray, setPreviousArray] = useState([]);
    const [showButton, setShowButton] = useState(false);


   
     
    const submitHandler = () => {
        let number1 = parseInt(inputNumber);
        document.getElementById("inputDis").disabled = false;
        document.getElementById("inputDis1").disabled = false;
        document.getElementById("inputDis2").disabled = false;
        document.getElementById("inputDis3").disabled = false;
       if(counter-1 <= 0){

        if( number1 < 1 ||  number1 > 100 || isNaN(number1)){
            alert("You have to enter a number between 1 and 100");
            return;
        }

        else{
        
            if(number1 === number){
                setMessage("Congradulations! You got it right!");
                setMessageValue("bg-success");
                document.getElementById("inputDis").disabled = true;
                document.getElementById("inputDis1").disabled = true;
                document.getElementById("inputDis2").disabled = true;
                document.getElementById("inputDis3").disabled = true;
                setCounter(0);
                setShowButton(true);
                return;
            }
            setShowButton(true);
            setMessage("GAME OVER!");
            setMessageValue("bg-warning");
            document.getElementById("inputDis").disabled = true;
            document.getElementById("inputDis1").disabled = true;
            document.getElementById("inputDis2").disabled = true;
            document.getElementById("inputDis3").disabled = true;
            setCounter(0);
            return;
           
        }
       }
        if( number1 < 1 ||  number1 > 100 || isNaN(number1)){
            alert("You must enter a number between 1 and 100");
            return;
        }else if (previousArray.some(p => p.value === number1)){
            alert("You have already entered that number! Try again!");
            return;
        }
        else{
            if(number1 === number){
                setMessage("Congradulations! You got it right!");
                setMessageValue("bg-success");
                setCounter(0);
                setShowButton(true);
                document.getElementById("inputDis").disabled = true;
                document.getElementById("inputDis1").disabled = true;
                document.getElementById("inputDis2").disabled = true;
                document.getElementById("inputDis3").disabled = true;
                setCounter(0);
                return;
            }else if(number1 < number){
                setMessage("UPS! Last guess was too low!");
                setMessageValue("bg-info");
            }else{
               setMessage("UPS! Last guess was too high!");
               setMessageValue("bg-danger");
            }

            setPreviousArray([...previousArray, {
                value: number1,
                key: previousArray.length
            }]);

            setShowParagraph(true); 
            setCounter(counter-1);
            setInputNumber("");
            
           
        }
    }




  
    const clearHandler = () =>{
        setInputNumber("");
    }

    const resetHandler = () =>{
        clearHandler();
        setCounter(10);
        setMessage("");
        setShowButton(false);
        setShowParagraph(false);
        setPreviousArray([]);
        number = Math.floor(Math.random() * 100) +1;
    }
    const newGameHandler = () =>{
        clearHandler();
        setCounter(10);
        setMessage("");
        setShowButton(false);
        setShowParagraph(false);
        setPreviousArray([]);
        document.getElementById("inputDis").disabled = false;
        document.getElementById("inputDis1").disabled = false;
        document.getElementById("inputDis2").disabled = false;
        document.getElementById("inputDis3").disabled = false;
        number = Math.floor(Math.random() * 100) +1;

    }
    return (
        <div className = "game">
            <p className="enter">Enter a number:</p>
            {
                <input type = "number"  id = {"inputDis"} value = {inputNumber} onChange = {(e) => { setInputNumber(e.target.value)}}>
                </input>
               
            }
                
            <div className ="buttons">
                <button className="dugmadi"  id = {"inputDis1"} onClick = {submitHandler} >Submit Number</button>
                <button className="dugmadi"  id = {"inputDis2"} onClick = {clearHandler}>Clear</button>
                <button className="dugmadi"  id = {"inputDis3"} onClick = {resetHandler} >Reset</button>
            </div>
            <hr/>

            <button className="dugmadi" >Remaining Attemps: {counter}</button>
            {
                  showParagraph && <p className ="guesses">Previus guesses: {previousArray.map(item => (
                      <li className= "list" key={item.key}>{item.value},</li>
                  ))}</p>
            }
            {
                message && <div className={messageValue}>{message}</div> 
            }
            
            {
                showButton && <button className="block" onClick = {newGameHandler} >Start new Game</button>
            }
        </div>
    );
};

export default Form;