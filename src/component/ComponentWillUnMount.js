import React, { Component } from 'react'
import Student from './Student'

export class ComponentWillUnMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show : true
        }
    }
    
    
    render() {
        return (
            <div>
                {
                   this.state.show ? <Student/>  : <h1>happy new year</h1> 
                }
                <button onClick={()=>this.setState({show : !this.state.show})} >UnMount</button>
            </div>
        )
    }
}

export default ComponentWillUnMount
