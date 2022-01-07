import React from 'react';
import './App.css';
import BBSVG from './assets/maestroJSX/bB.jsx';
import BKSVG from './assets/maestroJSX/bK.jsx';
import BNSVG from './assets/maestroJSX/bN.jsx';
import BPSVG from './assets/maestroJSX/bP.jsx';
import BQSVG from './assets/maestroJSX/bQ.jsx';
import BRSVG from './assets/maestroJSX/bR.jsx';
import WBSVG from './assets/maestroJSX/wB.jsx';
import WKSVG from './assets/maestroJSX/wK.jsx';
import WNSVG from './assets/maestroJSX/wN.jsx';
import WPSVG from './assets/maestroJSX/wP.jsx';
import WQSVG from './assets/maestroJSX/wQ.jsx';
import WRSVG from './assets/maestroJSX/wR.jsx';


function Game() {
  const boardDim = 8; // number of tiles 
  const boardSize = 500; // hieght and width of board

  let grid: number[] = [
    2, 0, 3, 0, 4, 0, 5, 0,
    0, 1, 0, 6, 0, 1, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 7, 0, 7, 0, 8, 0, 9,
    10, 0, 11, 0, 12, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
  ];

  const getBoardColor = (i: number): number => (i + Math.floor(i / boardDim) + 1) % 2;
  const gridStyle: any = { position: "absolute", height: "100%", width: "100%", display: "grid", gridTemplateColumns: `repeat(${boardDim},1fr)`, gridTemplateRows: `repeat(${boardDim},1fr)` };

  const renderGridElement = (idx: number, grid: number[], dim: number): JSX.Element | void => {
    const x = idx % dim + 1;
    const y = Math.floor(idx / dim) + 1;
    let pieceStyle = { width: "90%", height: "90%" };

    const getPiece = (i:number) => {
      switch (i) {
        case 1:
          return (<BPSVG style={pieceStyle}/>)
        case 2:
          return (<BQSVG style={pieceStyle}/>)
        case 3:
          return (<BKSVG style={pieceStyle}/>)
        case 4:
          return (<BRSVG style={pieceStyle}/>)
        case 5:
          return (<BBSVG style={pieceStyle}/>)
        case 6:
          return (<BNSVG style={pieceStyle}/>)

        case 7:
          return (<WPSVG style={pieceStyle}/>)
        case 8:
          return (<WQSVG style={pieceStyle}/>)
        case 9:
          return (<WKSVG style={pieceStyle}/>)
        case 10:
          return (<WRSVG style={pieceStyle}/>)
        case 11:
          return (<WBSVG style={pieceStyle}/>)
        case 12:
          return (<WNSVG style={pieceStyle}/>)
      }
    }
    const pieceId = grid[idx];
    if (pieceId != 0) {
      return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gridRowStart: `${y}`, gridRowEnd: `${y + 1}`, gridColumnStart: `${x}`, gridColumnEnd: `${x + 1}` }}>
          {/* //<img style={{ width: "80%", height: "80%" }} src={bPSVG} /> */}
           {/* <BPSVG style={{ width: "80%", height: "80%" }}/> */}
          {getPiece(pieceId)}
        </div>
      );
    }
  };

  return (
    <div style={{ position: "relative", height: `${boardSize}px`, width: `${boardSize}px` }}>
      <div id="Game" style={{ zIndex: "-1", ...gridStyle }}>
        {
          [...Array(boardDim ** 2)].map((v, i) => {
            const woodTile = {backgroundSize:"contain",backgroundImage:"url(https://www.howdens.com/-/media/howdens/assets/clh_asset_products/clh_asset_levela_108418/clh_asset_levelb_110198/clh_asset_levelc_110199/thirdlight_31827589530/thirdlight_31827589530_1_1.jpg)"};
            return (<div style={(getBoardColor(i) == 0) ? {...woodTile}: {} } />)
          })
        }
      </div>
      <div style={{ ...gridStyle }}>
        {grid.map((v, i) => renderGridElement(i, grid, boardDim))}
        {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gridRowStart: `${x}`, gridRowEnd: `${x + 1}`, gridColumnStart: `8`, gridColumnEnd: `9` }}>
          <img style={{ width: "80%", height: "80%" }} src={pawn} />
        </div> */}
      </div>
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
