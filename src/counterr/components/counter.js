
import { getRoles } from "@testing-library/dom";
import React , {useState} from "react";



function Counter(){
    const [Counter, setCounter] = useState(0)

    let increment = ()=>{
       
        setCounter(Counter + 1)
    } 
    let decrement =()=>{
        

        setCounter(Counter - 1)
        
    }

    let reset = () =>{
        setCounter(Counter === 0)
    }
    console.log(`counter2`, Counter)
    return(
        <div style={{padding:50 ,color :"red"}}>
            <button onClick={decrement} >-</button>

            <hr/>

            <span style = {{padding:20}}>
             {Counter}
            </span>

            <hr />

            <button onClick={increment}>+</button>

            <hr />

            <button onClick={reset}>Reset</button>


        </div>
    )
}


export default Counter;