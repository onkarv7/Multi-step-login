import React from 'react';
import styles from './stepProgress.module.scss';
function StepProgress({ tab, numberSteps }) {
  let numSteps;
  if (numberSteps === null || undefined) {
    numSteps = arrayofDigits(numberSteps);
  } else {
    numSteps = arrayofDigits(4);
  }

  // Convert Number to array
  function arrayofDigits(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div className={styles['stepper']} >
      <ul className={styles['steps']}>
        {numSteps.map((item) => {
          return (
            <li
              className={
                (tab === item
                  ? `${styles['step']} ${styles['step__incomplete']} ${styles['step__active']}`
                  : tab < item
                    ? ` ${styles['step']} ${styles['step__incomplete']} ${styles['step__inactive']}`
                    : ` ${styles['step']} ${styles['step__complete']} ${styles['step__inactive']}`)
              }
              key={item}
            >
              <span className={styles['step__icon']}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default StepProgress;
