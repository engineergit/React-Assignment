import React,{useState} from 'react';

function alertBox(){
    alert("I am an alert box!");
}
function TempratureCalc({title}){
    let [steps , setSteps] = useState(0);

    return(<div>
     <p>here temprature count is :{steps} </p>
    <button onClick={alertBox}>alert({title}) </button>
    <button onClick={()=>setSteps(steps + 1)}>+</button>
    <button onClick={ ()=>setSteps(steps-1)}>-</button>


    </div>);
}
export default TempratureCalc;