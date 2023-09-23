import React from 'react';
import styles from './styles.module.scss';
import Icon from '../../../public/images/Mask group.png';
import Hamsa from '../../../public/images/hamsa.png'
import Image from 'next/image';

const Guest = () => {
  return (
    <div className={styles.bg}>
      <Image className='mt-2' src={Icon} alt='icon'/>
      <div className="flex items-center justify-center gap-12 py-16">
        <Image width={500} src={Hamsa} alt='Hamsa'/>
        <div className={styles.content}>
            <h3>ಉದ್ಘಾಟನೆಯ ಗೌರವಾನ್ವಿತ ಮುಖ್ಯ ಅತಿಥಿ</h3>
            <h1>ನಾಧಬ್ರಹ್ಮಶ್ರೀ</h1>
            <h1>ಶ್ರೀ ಹಂಸಲೇಖ</h1>
            <h4>ಖ್ಯಾತ ಸಾಹಿತಿ, ಸಂಗೀತ ನಿರ್ದೇಶಕ</h4>
        </div>
      </div>
      <Image src={Icon} alt='icon'/>
    </div>
  )
}

export default Guest
