import React,{useState} from 'react';
import "./ThirdTurn.css"
function ThirdTurn (){
    const [isLit, setLit] = useState(false);
    return (<div className={`ThirdTurn ${isLit ? "light":"darkness"}`}>
    the room is {isLit ? "the rooom is red now":"the room is dark "}
    <br />
    <button onClick={()=>{setLit(!isLit)}}>
        ON
    </button>
    <br />
    <button onClick={()=>{setLit(!isLit)}}>
        OFF
    </button>
    </div>
    );
}
export default ThirdTurn