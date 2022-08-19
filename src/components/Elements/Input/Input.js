import React from 'react';
import styles from './input.module.scss';

function Input({ value, onChange, type = 'text', placeholder, id,
    label, minLength, maxLength }) {

    return (
        <div className={styles.FormInput}>
        {
            label &&
                id === "workspaceURL" ?
                 (  <div className={styles['tabTwoLabel']}>
                     <label className={styles.FormInput__label} htmlFor={id}>
                         {label}
                     </label>
                    <span style={{ fontSize: '1rem', marginLeft:'.2rem',
                        color:'var(--color-primary-text-medium)'}}>
                        (optional)
                    </span>
                    </div>
                 ) :
                (
                    <label className={styles.FormInput__label} htmlFor={id}>
                        {label}
                    </label>
                )
        }
        {
            id === "workspaceURL" ?
                <div className={styles['workspaceURL']}>
                    <div className={styles['workspaceURL__default']}>
                        www.eden.com/
                    </div>
                    <input
                        className={styles.workspaceURL__input}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        type={type}
                        id={id}
                        minLength={minLength}
                        maxLength={maxLength}
                        autoComplete='off'
                    />
                </div> 
            :
                <input
                    className={styles.FormInput__input}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    type={type}
                    id={id}
                    minLength={minLength}
                    maxLength={maxLength}
                    required
                    autoComplete='off'
                />
        }
         </div>
    );
};


export default Input;