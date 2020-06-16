import React from 'react';
import './App.css';
import PlainFunction from './plainFunction';
import Greefunc from "./greefunc";
import FirstTurn from './firstTurn';
import AnonymsFunc from './anonymsFunc';
import SingleLineComp from './OneLineComp';
import SecondTurn from './SecondTurn';
import Gate from './gate';
import RoomNew from './room';
import ThirdTurn from './thirdTurn';
import Temprature from './tempratureCalc';
function App() {
  return (
    <div className="App">
       <Temprature title="Temprature calculate"/>
       <PlainFunction />
       <Greefunc firstName="sohail" lastName="mehdi"/>
       <FirstTurn name1="sohail" age="17"/>
       <AnonymsFunc name="hi , i am sohail within anonymsFunc" />
       <SingleLineComp name="Single Line"/>
       <SecondTurn title="Title" body="Body" imageUrl="imageUrl"/>
       <Gate isOpen={false} />
       <RoomNew />
       <ThirdTurn/>
    </div>
        );
}

export default App;
