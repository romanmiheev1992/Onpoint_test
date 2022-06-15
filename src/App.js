/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import { MainSlide } from './components/mainSlide/mainSlide';
import styles from './App.module.css'
import { SecondSlide } from './components/secondSlide/secondSlide';
import { LastSlide } from './components/lastSlide/lastSlide';
import { useState } from 'react';
function App() {

  const [transformSize, setTransformSize] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [count, setCount] = useState(0)

  const touch = (e) => {

    setTouchStart(e.touches[0].screenX)

  }

  const move = (e) => {
     
    if(touchStart - e.touches[0].screenX > 100 && count === 0 && transformSize < 2048) {
      setTransformSize(transformSize + 1024)
      setCount(1)
    } else if(touchStart - e.touches[0].screenX < -100 && count === 0 && transformSize > 0) {
      setTransformSize(transformSize - 1024)
      setCount(1)
    }
  }

  const up = () => {
   setCount(0)
  }

  return (
    <div className="App">
        <div className={styles.main_logo}>
          <button
            onClick={() => setTransformSize(0)}
          >
             <img src={require('../src/components/img/first/home.png')} />
          </button>
         
          <img src={require('../src/components/img/first/project.png')} />
        </div>
        <section
        onTouchStart={(e) => touch(e)}
        onTouchMove={(e) => move(e)}
        onTouchEnd={up}
        className={styles.wrapper}
        id={'wrap'}
        style={{transform: `translateX(-${transformSize}px)`, transition: 'all .3s ', display: 'flex'}}>
          <MainSlide  size={setTransformSize}/>
          <SecondSlide num={transformSize} size={setTransformSize}/>
          <LastSlide size={setTransformSize}/>
        </section>
        

      <div className={styles.main_logo_bottom}>
        <img src={require('../src/components/img/first/onpoint_label.png')} />
      </div>
    </div>

  );
}

export default App;
