import React from 'react'
import { useState } from 'react'

export default function Object_useState() {
    const [name ,setName] = useState({
        title : '',
        descriptions : ''
    })
    const {title , descriptions } = name
    return (
       
        <div style={{padding : 10 , backgroundColor : "skyblue"}}>
            <h1>Title :- {title}</h1>
            <input value= { title} onChange={(e)=> setName({ ...name, title : e.target.value})} type='text'/>
            <input value= { descriptions} onChange={(e)=> setName({...name , descriptions : e.target.value})}  type="text"/>
        </div>
    )
}
