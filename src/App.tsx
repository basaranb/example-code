import React from 'react';

import './App.css';
import { initKeySubscription } from './helpers/keyEvents';
import { AssetType } from './types';
import assets from './data/assets.json';
import {Player, Lane} from './components/components';

type StateType = {
  index: number;
  assets: AssetType[];
};

type PropsType = {};

const App = () =>{

  const [index, setIndex] = React.useState(0)
  const [isLaneVisible, setLaneVisible] = React.useState(true)
  const [playingVideoIndex, setPlayingVideoIndex] = React.useState(0)
  
  // Passing index from state to callback causes the callback to use the old index everytime. tempIndexRef is used to pass in the latest index value to the callback
  const tempIndexRef = React.useRef(0)
  
  tempIndexRef.current = index

  const moveUp = () => setLaneVisible(true);
  const moveDown = () => setLaneVisible(false);
  const moveLeft = () => setIndex((prev)=>  Math.max(0, prev - 1));
  const moveRight = () => setIndex((prev)=> Math.min(  assets.length - 1, prev + 1));
  const keyEnter = () => setPlayingVideoIndex(tempIndexRef.current) 

  React.useEffect(() => { initKeySubscription({
        left: moveLeft,
        right: moveRight,
        up: moveUp,
        down: moveDown,
        enter: keyEnter,
      })},[])
   

    return (
      <div className="app">
        <Player asset={assets[playingVideoIndex]} setLaneVisible={setLaneVisible} />
        <Lane assets={assets} activeIndex={index} isLaneVisible={isLaneVisible} setLaneVisible={setLaneVisible} />
      </div>
    );
  }


export default App;
