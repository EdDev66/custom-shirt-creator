import React, { useState } from 'react';
import styles from './Tshirt.module.css';
import collar from '../images/collar.png';
import outer from '../images/outerr.png';
import shadow from '../images/shadow.png';
import beachTheme from '../images/beachPattern2.jpg'
import flannelPattern from '../images/flannelPattern.png';
import tie from '../images/tie.png'
import { TwitterPicker } from 'react-color';

const Tshirt = ({ theme, text }) => {
    const [color, setColor] = useState('red');

    return (
        <>
        <div id='my-node' className={styles.container} style={{backgroundColor: color}}>
        <p className={styles.shirtText}>{text}</p>
        {theme === 'beach' && <img src={beachTheme} className={styles.image}/>}
        {theme === 'formal' && (
        <>
        <img src={tie} className={`${styles.image} ${styles.tie}`}/>
        <img src={flannelPattern} className={`${styles.image} ${styles.formal}`}/>
        </>
        )}
            <img src={shadow} className={`${styles.image} ${styles.shadow}`}/>
            <img src={collar} className={`${styles.image} ${styles.collar}`}/>
            <img src={outer} className={styles.image}/>
        </div>
            <TwitterPicker
            colors={['#E32636', '#13BD03', '#000D97']}
            onChange={color => setColor(color.hex)}/>
        </>
    )
}

export default Tshirt
