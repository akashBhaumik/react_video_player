import React, { useState } from "react";


function Form_Validations() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userErr , setUserErr] = useState(false)
    // const [passErr , setPassErr] = useState(false)

    function userHandle(e) {
        let item = e.target.value
        // if(item.length < 3) {
        //     setUserErr(true);
        // } else {
        //     setUserErr(false)
        // }
        setUserName(item)
        console.log(e.target.value.length)
    }
    function passwordHandle(e) {
        let item = e.target.value
        // if(item.length < 3) {
        //     setPassErr(true);
        // } else {
        //     setPassErr(false)
        // }
        setPassword(item)
        console.log(e.target.value.length)
    }
    function submit_data(e) {
        if(userName.length < 3 || password.length < 3){
            // alert("enter valid username")
            setUserErr(true)
        }else {
            // alert("all good")
            setUserErr(false)
        }
       
        e.preventDefault()
    }

    return (
        <div style={{padding : 10 , backgroundColor : "skyblue"}}>
            <form onSubmit={submit_data}>
                <input type="text" placeholder="username" onChange={userHandle} /> <br/>
                {userErr ? <span> not valid username</span> : ""}<br/><br/>
                <input type="text" placeholder="enter password" onChange={passwordHandle} /><br/>
                {userErr ? <span> not valid username</span> : ""}<br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Form_Validations