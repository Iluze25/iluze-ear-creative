import React from 'react';
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '' }) => {
    const variantClass = styles[variant] || styles.primary;
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${variantClass} ${className}`}
        >
            {children}
        </button>
    );
};