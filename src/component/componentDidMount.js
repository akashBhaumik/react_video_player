import React from 'react'

class DidMount extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "akash"
        }
        console.log("constructer")
    }
    componentDidMount(){
        console.log("component did mount")
    }
    render(){
        console.log("render")
        return (<div>
            <h1>component did mount name = {this.state.name}</h1>
            <button onClick={()=>this.setState({name : "mahi"})} >update data</button>

        </div>)
    }
}
export default DidMount