import { useState } from "react"


function ListComp(){
     const [tit,setTit]=useState("")
    const data=[
        {
            id:1,
            title:"Work 1",
           
            verifyPost: false
        },
        {
            id:2,
            title:"Work 2",
            
            verifyPost: false
        },
        {
            id:3,
            title:"Work 3",
           
            verifyPost: false
        }
    ]
    const [todo,setTodo]=useState([...data])
    const handalSub=()=>{
        const obj={
            title:tit,
            id:todo.length+1,
           
            verifyPost:false
        }
        setTodo(...todo,obj)
        setTit("")
    }
    const handalChange=(e)=>{
        setTit(e.target.value)
    }

    return (
        <div>
           <div onSubmit={handalSub}>
             <input value={tit} onChange={handalChange} type="text" placeholder="Add Title"/>

             <buttun onClick={handalSub}>Add</buttun>
           </div>
           <div>
              {todo.map((item)=>(
                <div>
                    <h1>{item.title}</h1>
                    <h2>{item.verifyPost}</h2>
                    <button>Toggle</button>
                    <button>delete</button>
                </div>
              ))}
           </div>
        </div>
    )
}

export default ListComp