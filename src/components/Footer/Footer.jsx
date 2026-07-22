import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className="font-heading font-extrabold text-lg">ILUZE EAR creative</p>
                <p className="text-sm font-medium">© 2026 Iluze Ear — Mural Artist & Realistic Sketch Artist. All Rights Reserved.</p>
            </div>
        </footer>
    );
};