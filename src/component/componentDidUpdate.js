import React from "react";
import DidMount from "./componentDidMount";
class DidUpdate extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    componentDidUpdate(prevProp,preState,snapShort){
        console.log("did update", preState.count , this.state.count)
        // if(this.state.count < 10)
        // this.setState({count : this.state.count +1 })
        if(preState.count === this.state.count)
        alert("same number")
    }

    render(){

        return(
            <div>
                <h1>Component did Update = {this.state.count}</h1>
                <button onClick={()=> this.setState({count : 1 })}>update </button>
            </div>
        )
    }
    
}
export default DidUpdate