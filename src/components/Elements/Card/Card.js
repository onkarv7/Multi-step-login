import React from 'react';
import styles from './card.module.scss';
import user from '../../../assests/icons/user.png';
import group from '../../../assests/icons/group.png';

function Card({card, isActive, setUsage}) {

    function handleCardSelect(){
        setUsage({'usage':card.id})
    }

  return (
        <div className={styles.Card} onClick={handleCardSelect}
          style={{ border: isActive ? "2px solid #5A4AD1": "2px solid #e2ebf6" }}>
            <img style={{marginBottom:'0.7rem'}} 
            src={card.id === 1 ? user : group} 
            alt={card.title} height="20rem" width="20rem"/>
            <span className={styles.Card__content__title}>{card.title}</span>
            <span className={styles.Card__content__text}>{card.text}</span>
        </div>
  )
}

export default Card