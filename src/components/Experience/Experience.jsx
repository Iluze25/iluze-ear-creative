import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import { SectionTitle } from '../UI/SectionTitle';
import styles from './Experience.module.css';

export const Experience = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Timeline"
                    title="Artist Journey"
                    subtitle="Jejak langkah eksplorasi visual dan pameran."
                />

                <div className={styles.timeline}>
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className={styles.yearDot}>{item.year}</div>
                            <div className={styles.content}>
                                <h3 className={`font-heading ${styles.role}`}>{item.role}</h3>
                                <span className={styles.org}>{item.organization}</span>
                                <p className={styles.desc}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};