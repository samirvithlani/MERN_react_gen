import React, { useEffect, useState } from 'react'

export const Counter = () => {


    const [counter, setcounter] = useState(0)

    useEffect(() => {
      
        console.log('useEffect -> '+counter)
      
    }, [counter])
    
  return (
    <div>
            <button onClick={()=>setcounter(counter+1)}>+</button>
    </div>
  )
}
