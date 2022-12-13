import React from 'react'
import './css/grid.css'
import Cell from './cell'

const arr = new Array(9).fill(0);

const Grid = ({data,setData}) => {
  return (
    <div className='grid'>
      <div className='back-container'>
      {arr.map((a,index)=><div key={index} className='backline' ></div>)}
      </div>
     {data.map((r,i)=> {
     return r.map((c,j)=><Cell key={i*9+j} setData={setData} i={i} j={j} data={data}/>)})
    }
    </div>
  )
}

export default Grid