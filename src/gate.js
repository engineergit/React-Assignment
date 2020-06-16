import React from 'react';
const Gate =({isOpen})=>{
return<div><b>Gate is open</b> {isOpen? "open": "closed"}.</div>
}
export default Gate