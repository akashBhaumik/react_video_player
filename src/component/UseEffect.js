import React,{useEffect , useState} from "react";
function UseEffect (){
    const [count , setCount] = useState(0)
    useEffect(()=>{
        alert("UseEffect")
    })
    return (<div>
        <h1>use effect works = {count}</h1>
        <button onClick={()=>setCount(count + 1)}>update</button>
    </div>)
}
export default UseEffect