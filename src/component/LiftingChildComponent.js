import React from 'react'

function LiftingChildComponent(props) {
    const address = "gokulnagar"
    return (
        <div>
            <h1>user name :: {props.data}</h1>
            <button onClick={()=> props.name(address)}>click</button>
        </div>
    )
}

export default LiftingChildComponent