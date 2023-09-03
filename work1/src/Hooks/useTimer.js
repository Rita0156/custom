
import React, { useEffect } from "react"
const useTimer=()=>{
    const [ready,setReady]=React.useState(false)
    useEffect(()=>{
       const time= setTimeout(()=>{
            setReady(true)
         },5000)
         clearTimeout(time)
         
    },[])
    return ready
    
}
export {useTimer}