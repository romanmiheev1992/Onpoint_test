import { useState } from 'react'
import styles from './infoBorder.module.css'
import cs from 'classnames'
export const InfoBorder = ({toggle}) => {

    const [content, useContent] = useState([
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 2,
            text: 'Faucibus pulvinar elementum integer enim'
        },
        {
            id: 3,
            text: 'Faucibus pulvinar elementum integer enim'
        },
        {
            id: 4,
            text: 'Mi bibendum neque egestas congue quisque egestas diam'
        },
        {
            id: 5,
            text: 'Venenatis lectus magna fringilla urna '
        },
        {
            id: 6,
            text: 'Venenatis lectus magna fringilla urna'
        },
    ])

    const [startNum, setStartNum] = useState(0)
    const [endNum, setEndNum] = useState(3)


    const inc = (e) => {
        setStartNum(3)
        setEndNum(6)
    }

    const dec = () => {
        setStartNum(0)
        setEndNum(3)
    }

    return (
        <div className={styles.infoBorder}>
            <div className={styles.InfoBorderMain}>
                <button 
                onClick={() => toggle(false)} className={styles.toggle}>&#10006;</button>
                <div
                className={styles.content}>
                    {
                        content.map((item, i) => {
                            if(i >= startNum && i < endNum) {
                                return <div key={i} className={styles.content_item}>
                                    <span>0{item.id}</span>
                                    <p>{item.text}</p>
                                </div>  
                            }
                            
                        })
                    }

                </div>
                <div className={styles.arrows}>
                    <button
                        onClick={dec}
                    >&#8249;</button>
                    <div
                         className={cs(styles.pasive, {
                            [styles.active]: startNum === 0,
                         })
                        }

                        onClick={dec}
                    ></div>
                    <div
                     className={cs(styles.pasive, {
                        [styles.active]: startNum === 3,
                     }
                        
                    )}
                        onClick={inc}
                    ></div>
                    <button
                        onClick={inc}
                    >&#8250;</button>
                </div>
            </div>

            
        </div>
    )
}