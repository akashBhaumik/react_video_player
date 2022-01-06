import React from "react";

function Hide_Show (){
    const [status , setStatus] = React.useState(true)
    return <div style={{padding : 10 , backgroundColor : "skyblue"}}>
        {
           status ? <h1>Akash</h1> : null
        }
        {/* <button onClick={()=> setStatus(true)}>show</button>
        <button onClick={()=> setStatus(false)}>hide</button> */}
        <button onClick={()=> setStatus(!status)}>Toggle</button>
    </div>
}
export default Hide_Show