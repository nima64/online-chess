import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


function Square(props: any) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Game() {
  const boardDim = 8; // number of tiles 
  const boardSize = 300; // hieght and width of board

  let grid: number[] = Array(boardDim*boardDim).fill(null);
  const getBoardColor = (i:number):number => (i+Math.floor(i/boardDim)+1)%2;

  return (
    <div id="Game" style={{ display: "grid", height:`${boardSize}px`, width:`${boardSize}px`, gridTemplateColumns: `repeat(${boardDim},1fr)`}}>
      {
        grid.map((v, i) => (<div style={{backgroundColor:`${getBoardColor(i) == 0?'blue':'white'}`}}/>))
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
