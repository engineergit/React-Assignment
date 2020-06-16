import React from 'react';
import sohailimg from './sohail.JPG';
// import ReactDOM from 'react-dom';
const MediaCard =({title,body,imageUrl})=>{
    return <div>
        <h1>Second turn</h1>
        <h2>{<strong>title</strong>}</h2>
        <p>{body}</p>
        <img alt="imageUrl" src={sohailimg} />
    </div>
}
export default MediaCard
// ReactDOM.render(<MediaCard title="Title" body="Body" imageUrl="" />, document.getElementById('root'));