/* eslint-disable jsx-a11y/alt-text */

import styles from './mainSlide.module.css'

export const MainSlide = ({size}) => {
    return(
        <div className={styles.main}>
            <div className={styles.main_text}>
                <span>привет,</span>
                <span>это <strong>не</strong></span>
                <span>коммерческое</span>
                <span>задание</span>
                <button
                   onClick={() => size(1024)}
                >
                    <div
                    ><p>&rarr;</p></div>
                    <p>Что дальше?</p>
                </button>
            </div>
            <div className={styles.main_microbs}>
                <img src={require('../img/first/blue.png')}/>
                <img src={require('../img/first/blue1.png')}/>
                <img src={require('../img/first/blue2.png')}/>
                <img src={require('../img/first/left_bottom_malecule.png')}/>
                <img src={require('../img/first/r_up.png')}/>
                <img src={require('../img/first/semen-main.png')}/>
                <img src={require('../img/first/main_blur_semen.png')} />
                <img src={require('../img/first/big_bottom.png')} />
                <img src={require('../img/first/m_b.png')} />
            </div>
        </div>
    )

}