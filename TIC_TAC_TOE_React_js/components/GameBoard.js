import { useState } from "react";
const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard(){
    const [gameboard,setgameboard]=useState(initialGameBoard);
    function handleselect(rowIndex,colIndex){
        console.log("hello1");
        setgameboard((pregameboard)=>{
            const updatedboard=[...pregameboard.map(innerArray=>[...innerArray])];
            updatedboard[rowIndex][colIndex]='X';
            console.log("hello");
            return updatedboard;
        })
    }
    return(
        <ol id="game-board">
       {gameboard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=>(
            <li key={colIndex}>
                <button onClick={()=>handleselect(rowIndex,colIndex)}>{playerSymbol}</button>
            </li>))}
        </ol>
       </li>)}
        </ol>
    )
}