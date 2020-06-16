import React from 'react';
import "./firstturn.css";
function firstTurn (props){
return <div><h1>First Turn</h1>Hello <strong> {props.name1}</strong>!
    <ul>
        <li>i am {props.age}</li>
        <li>my teacher is years {15+25} old</li>
        <li className="yellowPak">i live in pakistan</li>
        <li>i live in pakistan</li>
    </ul>
</div>
}
export default firstTurn;