/* eslint-disable jsx-a11y/alt-text */

import { useState } from 'react'
import { InfoBorder } from './infoBorder/InfoBorder'
import styles from './lastSlide.module.css'

export const LastSlide = () => {
    
    const [borderToggle, SetBorderToggle] = useState(false)

    return(
        <div className={styles.last}>
           
           <div className={styles.bottleSection}>
            <img src={require('../img/last/balon.png')}/>
            <img src={require('../img/last/blue_booble_big.png')}/>
            <img src={require('../img/last/blue_booble_middle_1.png')}/>
            <img src={require('../img/last/blue_booble_middle_2.png')}/>
            <img src={require('../img/last/blue_booble_small.png')}/>
            <img src={require('../img/last/blue_booble_small.png')}/>
            <img src={require('../img/last/red_booble_big.png')}/>
            <img src={require('../img/last/red_booble_middle.png')}/>
           </div>

           <div className={styles.header}>
            <p>{!borderToggle ? 'КЛЮЧЕВОЕ СООБЩЕНИЕ' : 'ПРЕИМУЩЕСТВА'}</p>
            <p>BREND<span>X</span><span>Y</span></p>
           </div>

           <div className={styles.contentSection}>
                <div>
                    <img src={require('../img/last/label_1.png')}/>
                    <p>Ehicula ipsum a arcu  <br/> cursus vitae. Eu non <br/> diam phasellus  <br/>vestibulum lorem sed <br/> risus ultricie</p>
                </div>
                <div>
                    <img src={require('../img/last/label_2.png')}/>
                    <p>A arcu <br/> cursus vitae</p>
                </div>
                <button
                className={styles.button}
                onClick={() => SetBorderToggle(true)}>
                    <section><p>&times;</p></section>
                    <p>Подробнее</p>
                </button>
           </div>

           {
                borderToggle
                ? <InfoBorder toggle={SetBorderToggle}/>
                : null
           }
        </div>
    )

}