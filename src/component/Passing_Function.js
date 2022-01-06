import React , {useState} from "react"

function Passing_Functions (props){
    const [data , setData]= useState("User Component")
    return (<div>
        <h1>{data}</h1>
        <button onClick={ ()=>setData(props.data)}>get data</button>
        
    </div>)
}
export default Passing_Functions