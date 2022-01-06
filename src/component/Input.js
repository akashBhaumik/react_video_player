import React , {useState} from "react"

function Input (){
    const [name , setName ] = useState(null)
    const [print , setPrint] = useState(false)
    function onChangeHandler (event){
        setName(event.target.value)
    }

    return (<div style={{padding : 10 , backgroundColor : "skyblue"}}>
        {
            print ? <h1> {name}</h1> : "not printed"
        }
        
       <label>Name :-</label>
       < input type="text" onChange={ onChangeHandler} />
       <button onClick={()=>setPrint(true)}>Submit</button>
    </div>)
}
export default Input