import React from 'react'
import "./css/footer.css"

const footer = () => {
  return (
    <footer className="footer">
<p className='footer-about'>Sudoku is a logic-based, combinatorial number-placement puzzle. This Web App is Created using React to Provide Solutions to your Sudoku Puzzles</p>
<div className='footer__links'>
    <a href='https://github.com/prav-in'>prav-in</a>  
    <a href='https://github.com/kumawatsr'>kumawatsr</a> 
    </div>
    </footer>
  )
}

export default footer