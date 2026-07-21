import React from 'react';
import styles from './SectionTitle.module.css';

export const SectionTitle = ({ title, subtitle, tag }) => {
    return (
        <div className={styles.container}>
            {tag && <span className={styles.tag}>{tag}</span>}
            <h2 className={`font-heading ${styles.title}`}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
};