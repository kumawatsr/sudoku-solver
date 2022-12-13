import React, { useState,useEffect } from 'react'
import Grid from './grid'
import './css/Main.css'

   let board = new Array(9);

for(let i=0;i<9;i++){
    board[i]= new Array(9).fill(0);
} 

const Main = () => {

      // hooks
      const [data,setData] = useState(board);

      useEffect(() => {
        return () => clearSudoku();
      }, []);

      //functions

      const clearSudoku = ()=>{
        let arr = new Array(9);
        for(let i=0;i<9;i++){
            arr[i]= new Array(9).fill(0);
        } 

        setData(arr);
      }

        const solveSudoku=()=>{

            for(let i=0;i<9;i++){
                for(let j=0;j<9;j++){
                    board[i][j] = data[i][j]
                }
            }

            if(solve(board)){
                setData(board)
            }else{
                alert("Invalid Arguments")
            }

        }

         const solve = (grid)=>{
  
          let n=grid.length
          let vacent = false
          let i=0;

          while(i<n*n){

            if(grid[Math.floor(i/n)][i%n]===0){
              vacent = true;
              break;
            }else{
                if(!isSafe(grid,Math.floor(i/n),i%n,grid[Math.floor(i/n)][i%n])){
                  return false; 
                }
            }
            i++;
          }
       
          if(!vacent) return true;
      
          for(let num =1;num<=9;num++){

         if( isSafe(grid,Math.floor(i/n),i%n,num)){
            grid[Math.floor(i/n)][i%n] = num;
             
          if(solve(grid)===true){
            return true;
          }else{
            grid[Math.floor(i/n)][i%n] = 0;    
           }
         }
      
        }
      return false;
         }
      
         const isSafe=(grid,r,c,num)=>{

          for(let i=0;i< grid.length;i++){
          
            if(i===r)
            continue;

            if(grid[i][c]===num)
              return false;
          }
      
      for(let i=0;i< grid.length;i++){
        if(i===c)
        continue;

        if(grid[r][i]===num )
            return false;
      }
      
      let startRow = r-r%Math.sqrt(grid.length);
      let startCol = c-c%Math.sqrt(grid.length);
      
      for(let i=startRow;i<startRow+3;i++)
        for(let j=startCol;j<startCol+3;j++){
         
            if(i===r && j===c)
            continue;

            if(grid[i][j]===num )
                return false;
        }
      
      return true;
      
         }

  return (
    <div className='main'>
        <button className='btn' onClick={clearSudoku}>Clear</button>
          <Grid data={data} setData={setData} />
    <button className='btn' onClick={solveSudoku}>Solve</button>
   
    </div>
  )
}

export default Main