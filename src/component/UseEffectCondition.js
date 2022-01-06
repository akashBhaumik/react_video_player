import React , {useState , useEffect} from "react";

function UseEffectCondition (){
    const [increment ,setIncrement] = useState(50)
    const [decrement ,setDecrement] = useState(50)
    useEffect(()=>{
        console.log("useeffect called",decrement)
    },[decrement])

    return (<div>

        <h1> count :: {increment}</h1>
        <h1> data :: {decrement}</h1>
        <button onClick={()=>setIncrement(increment + 5)}>Increment count</button>
        <button onClick={()=>setDecrement(decrement - 5)}>Decrement data</button>

    </div>)
}
export default UseEffectCondition