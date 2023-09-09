import { useState } from "react"


function ListComp(){
     const [tit,setTit]=useState("")
    const data=[
        {
            id:1,
            title:"Work 1",
            body: "com",
            verifyPost: false
        },
        {
            id:2,
            title:"Work 2",
            body: "com 2",
            verifyPost: false
        },
        {
            id:3,
            title:"Work 3",
            body: "com 3",
            verifyPost: false
        }
    ]
    const handalSub=()=>{
        let obj={
            title:tit,
            id:tit,
            body:"com a",
            verifyPost:false
        }
        data.push(obj)
        setTit("")
    }
    const handalChange=(e)=>{
        setTit(e.target.value)
    }

    return (
        <div>
           <div onSubmit={handalSub}>
             <input value={tit} onChange={handalChange} type="text" placeholder="Add Title"/>

             <buttun type="submit">Add</buttun>
           </div>
           <div>
              {data.map((item)=>(
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