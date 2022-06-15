/* eslint-disable jsx-a11y/alt-text */

import { useState } from 'react'
import styles from './secondSlide.module.css'
import cs from 'classnames'
import { useEffect } from 'react'

export const SecondSlide = (num) => {

    const [scrollState, UseScrollState] = useState(0)
    const [tag, setTag] = useState(null)

    useEffect(() => {
        setTag(document.getElementsByTagName('section'))
    },[])

    const scroll = (e) => {
        UseScrollState(e.target.scrollTop)
    }

    const move = (e) => {
        if(e.touches[0].screenY - 455 >= 0 && e.touches[0].screenY - 455 < 370) {
            return tag[1].scrollTop = e.touches[0].screenY - 475
        }
        return setTag(document.getElementsByTagName('section'))
    }

    return(
        <div className={styles.second}>
            <div className={styles.semens}>
            <img
            className={cs({
                [styles.active]: num.num === 1024
            })}
            src={require('../img/second/sement_main.png')}/>
            <img
            className={cs({
                [styles.active]: num.num === 1024
            })} src={require('../img/second/semen_2.png')}/>
            <img
            className={cs({
                [styles.active]: num.num === 1024
            })} src={require('../img/second/sement_3.png')}/>
            <img
            className={cs({
                [styles.active]: num.num === 1024
            })} src={require('../img/second/sement_4.png')}/>
            <img
            className={cs({
                [styles.active]: num.num === 1024
            })} src={require('../img/second/sement_5.png')}/>
            </div>

            <div className={styles.textHeader}>
                ТЕКСТ<br/>СООБЩЕНИЯ
            </div>

            <section
             onScroll={scroll}
             className={styles.textBlock}>
                <strong> Lorem ipsum dolor sit amet,</strong> consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellat, labore maiores ullam molestias, accusantium facere perspiciatis 
                    nemo. Omnis, eos nois, eos non. Beatae optio at provident non ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellat, labore maiores ullam molestias, accusantium facere perspiciatis 
                    nemo. Omnis, eos non. Beatae optio at provident non ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellat, labore maiores ullam molestias, accusantium facere perspiciatis 
                    nemo. Omnis, eos non. Beatae optio at provident non ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellapellat, labore maiores ullam molestias, accusantium facere perspiciatis 
                    nemo. Omnn. Beatae optio at provident non ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellat, labore maioreatae optio at providentnon ducimus. <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellat, labore mt, labore maiores ullam molestias, accusantium facere perspiciatis 
                    nemo. Omnis, eos non. Beatae optio at provident non ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi, 
                    incidunt natus repellat, labore maiores ullam molestias, accusantium facere perspiciatis 
                    nemo. Omnis, eos non.
            </section>

            <div
            className={styles.scrollSection}>
                <div className={styles.scrollBoard}>
                    <div  
                    onTouchMove={(move)}
                    className={styles.scrollObj}
                    style={{transform: `translate(-8px,${scrollState}px)`}}
                    >
                    </div>
                </div>
            </div>
        </div>
    )

}