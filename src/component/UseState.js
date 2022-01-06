import React,{useState} from 'react'
function UseState (){
    const [data,setData] =  useState("akash")
    return (<div>
        <h1>useState method works{data}</h1>
        <button onClick={()=>setData("bhaumik")}>click</button>
    </div>)
}
export default UseState