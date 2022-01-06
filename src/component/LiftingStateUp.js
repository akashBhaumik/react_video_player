import React from "react";
import LiftingChildComponent from "./LiftingChildComponent";
function LiftingStateUp(){
    function user_name(item){
        alert(item)
    }
    return(
        <>
        <LiftingChildComponent name={user_name} data={"hello"}/>
        </>
    )
}
export default LiftingStateUp