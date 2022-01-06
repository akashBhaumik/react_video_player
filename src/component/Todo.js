import { useState } from "react/cjs/react.development"

function Todo (){
    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState('')
    const handleInput =(e)=>{
        let inputValue = e.target.value
        let warning = inputValue.includes('.js') ? 'you neeed javascript skills' : 'Good choice'
        setTodo(inputValue)
        setWarning(warning)
    } 
    return (
        <div >
            <h1>Component Name : {todo} </h1>
            <label>Subject : </label>
            <input type='text' value={todo} onChange={handleInput}></input>
            <hr></hr>
            <h3>Comment Box : {warning}</h3>
        </div>
    )
}
export default Todo