
import React, { useEffect } from "react"
const useTimer=(tm)=>{
    const [ready,setReady]=React.useState(false)
    useEffect(()=>{
       const time= setTimeout(()=>{
            setReady(true)
         },tm)
         clearTimeout(time)
         
    },[])
    return ready
    
}
export {useTimer}