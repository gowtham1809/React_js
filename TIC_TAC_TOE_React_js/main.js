import React from 'react'
import colorNames from 'colornames';
const main = ({colr,setcolor,tongle,settongle,sethexval}) => {
  
  return (
    <form className='addForm' onSubmit={(e)=>e.preventDefault()}>
    <input
    id="input"
    type='text'
    placeholder='add color'
    value={colr}
    onChange={(e)=>{setcolor(e.target.value);sethexval(colorNames(e.target.value))}}>
    </input>
    
    <button onClick={(e)=>settongle(!tongle)}>Toggle color</button>
    
  </form>
    
  )
}
export default main