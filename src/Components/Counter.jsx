import React, { useState } from 'react'
import "./Counter.css"

const Counter = ({initialvalue}) => {

// use state is a hook in  react use to inform VDOM of th echanges that needs to be renderIntoDocument
// it return 2 things in an Arrayvariable and fun to update that variable

// hooks are set of function use to interect with VDOM

//state
//state is a info that is changing DOM
const [count,setCount]=useState(initialvalue)
  return (
    <div className='box'>
 <span> <h1 className={count%2==0 ? "red" : "teal"}> Counter App {count%2===0 ? "Even" : "Odd"}</h1> <h1 className={count%2==0 ? "teal" : "red"} > {count}</h1> </span> 
    <button className='inc'  onClick={()=>
        setCount(count+1)

    }>Increament</button>
    <button className='dec' onClick={()=>{
          if(count>0){

              setCount(count-1)
          }
        
    }}>Decreament</button>

    <button className='dbl' onClick={()=>{
        setCount(count*2)
    }}>Double</button>
    </div>

    )
}

export default Counter

//retrun single element from component or use fragment

//<></>  not use classname here

//classes constructure so use className instead of class