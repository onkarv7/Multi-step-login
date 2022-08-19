import React from 'react';
import logo from '../../assests/icons/logo.svg';
import styles from './header.module.scss';
function Header() {
  return (
    <div className={styles.Header}>
          <img src={logo} alt='Eden_Logo' className={styles.Header__image}/>
          <span className={styles.Header__text}>Eden</span>
    </div>
  )
}

export default Header