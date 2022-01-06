import {useState}  from "react";

function User (prop){
    // const [data , setState] = useState(0)
    
    // function update(){
    //     setState(data + 1 )
    //     // alert(data)
    // }
    return <div style={{backgroundColor : "skyblue" , margin : 10}}>

        <h1>  {prop.text}</h1>
        {/* <button onClick={() => setState(data + 1 )}>click me</button> */}
    </div>
    
}
export default User