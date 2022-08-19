import React from 'react';
import styles from './button.module.scss';

function Button({ text, handleClick}) {

  return (
    <button type="submit" className={styles.FormButton} 
    onClick={handleClick}> {text} </button>
  )
}

export default Button