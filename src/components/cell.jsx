import React from 'react'
import './css/cell.css'

const cell = ({setData,i,j,data}) => {

  const handleChange=(i,j)=>(e)=>{
    
    let n = e.target.value===''?0:parseInt(e.target.value);

    if(n<0){
      n=0;
    }

    if(n>9){
      n=9
    }

    let newArr = [...data]
    newArr[i][j] = n;
    setData(newArr)
  }

  return (
    <input type='number' className='cell' value={data[i][j]===0?'':data[i][j]} onChange={handleChange(i,j)}/>
  )
}

export default cell