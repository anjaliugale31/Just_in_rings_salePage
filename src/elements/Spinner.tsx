import React from 'react'
import { BeatLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <BeatLoader
    color="#eb4909"
    margin={10}
    size={30}
    style={{display:'block', textAlign:'center', marginTop:300 }}
    />)
}

export default Spinner