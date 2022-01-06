import React, { Component } from 'react'

 class Clock_class extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              date : new Date() , 
              count : 0

         }
     }
     componentDidMount(){
         const {count} = this.state;
         document.title = `clicked ${count} times`;
       this.interval =  setInterval(()=>{
             this.setState({
                 date : new Date()
             })
         },1000)
     }
     componentDidUpdate(){
        const {count} = this.state;
        document.title = `clicked ${count} times`
     }
     componentWillUnmount(){
        clearInterval(this.interval)
     }

     addCount=()=>{
         this.setState(({count}) => ({
            count : count +1 
         }))
     }
     
    render() {
        const {date} = this.state
        return (
            <div>
                <h1>Time : {date.toLocaleTimeString()}</h1>
                <button type='button' onClick={this.addCount}>Click</button>
            </div>
        )
    }
}

export default Clock_class
