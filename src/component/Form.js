import { useState } from "react";
import InputRange from "react-input-range";
function Form(){
    const [name , setName] = useState("")
    const [friend , setFriend] = useState("")
    const [tnc , setTnc] = useState(false)


    function getData(e){
        e.preventDefault()
        console.log("name = ",name , "friend = " , friend , "tnc = " , tnc)
    }


    return <div
     style={{padding : 50 , backgroundColor : "skyblue"}}>
        <h1>handle form in react</h1>
        <form onSubmit={getData}>
            <label>Name :-</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} /> 
            <br></br><br></br>
            <label>Friend :-</label>
            <select  onChange={(e)=>setFriend(e.target.value)}>
                <option>--Select--</option>
                <option>rakesh</option>
                <option>pritam</option>
                <option>sunil</option>
                <option>raaj</option>
            </select> <br></br>
             <br></br>
            <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/> <span>Agree terms and conditions</span>
            <br></br>
             <br></br>
             <button type="submit">Submit</button>
        </form>
        <InputRange
        // maxValue={20}
        // minValue={0}
        // value={}
        // onChange={value => this.setState({ value })}
         />
    </div>
}
export default Form