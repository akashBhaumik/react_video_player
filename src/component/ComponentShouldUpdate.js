import React, { Component } from 'react'

export class ComponentShouldUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate",this.state.count)
        if(this.state.count < 10 )
        return true
    }
    
    render() {
        return (
            <div>
                <h1>ComponentShouldUpdate = {this.state.count}</h1>
                <button onClick={()=>this.setState({count : this.state.count + 1 })}>should update</button>
            </div>
        )
    }
}

export default ComponentShouldUpdate
