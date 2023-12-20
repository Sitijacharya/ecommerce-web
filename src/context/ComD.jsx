import React,{useContext} from 'react'
import { Globalcontext } from './Global'

const ComD = () => {
    const data=useContext(Globalcontext)
  return (
    <>
    <h2>the name of the student is {data.fName}</h2>
    <h2>He lives in {data.address}</h2>
    
    </>
    
  )
}

export default ComD