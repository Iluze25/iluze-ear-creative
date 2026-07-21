import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import { SectionTitle } from '../UI/SectionTitle';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

export const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Words"
                    title="Client Testimonials"
                    subtitle="Tanggapan para kolaborator dan pemilik ruang."
                />

                <div className={styles.grid}>
                    {testimonialsData.map((t) => (
                        <div key={t.id} className={styles.card}>
                            <Quote size={32} className="text-[#5B4B8A] mb-4" />
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div className={styles.authorGroup}>
                                <span className="font-bold block">{t.author}</span>
                                <span className="text-xs text-gray-600 font-semibold">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};