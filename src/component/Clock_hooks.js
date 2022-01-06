import React , {useState , useEffect} from 'react'

function Clock_hooks() {
    const [count , setCount] = useState(0)
    const [date , setDate] = useState(new Date())
    const [text,setText]= useState('')
  const addCount = ()=>{
    setCount((prevCount)=> prevCount + 1)
    }
    useEffect(() => {
        console.log('updating text')
        document.title = `clicked ${count} times`

    },[count])
    useEffect(() => {
        console.log("starting timer")
     const interval =   setInterval(()=>{
        // console.log("starting clock")
           setDate(new Date())
       },1000)
       return ()=>{
           console.log('component unmount')
           clearInterval(interval)
       }

    },[])

    return (
        <div>
            <p>
                Time : - {date.toLocaleTimeString()}<br/>
                count :- {count}<br/>
                <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            </p>
            <button type='button' onClick={addCount}>Click</button>
        </div>
    )
}

export default Clock_hooks
