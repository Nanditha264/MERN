import React, { useEffect } from 'react'
import {useState} from "react"


const State= ()=> {
    const[count,setCount]=useState(0);
    const[show,setShow]=useState(false);
    const increment=()=>
    {
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("From effect");
    },[show]);
    
  return (
    <>
    <div>
    <h1> USESTATE Example</h1>
    <h3>Count:{count}</h3>
    <button onClick={increment} >Increase</button>
    <br></br>
    {show && <h2>This is hidden msg</h2>}
    <button onClick={()=>setShow(!show)}>{(show && <p>Hide</p>)||(!show && <p>Show</p>)}</button>
    
    </div>

    </>
  )
}

export default State  