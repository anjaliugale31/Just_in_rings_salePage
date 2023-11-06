import React from 'react'
import { CircleLoader } from 'react-spinners'

const CircularLoader = () => {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <CircleLoader 
              size={50}
            color="#d79136"
            style={{textAlign: 'center'}}
        />
    </div>
  )
}

export default CircularLoader