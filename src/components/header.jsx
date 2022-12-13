import React from 'react';
import './css/header.css';

const header = () => {
  return (
    <div>
     <header className='head'>
         <h3 className='home'>Home</h3>
         <h1 className='sudoku'>Sudoku Solver</h1>
         <h3 className='about'>About</h3>
     </header>
    </div>
  )
}

export default header
