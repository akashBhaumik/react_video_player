import React, { Component } from 'react'

export class Student extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount called")
    }
    render() {
        return (
            <div>
                <h1>happy diwali</h1>
            </div>
        )
    }
}

export default Student
