import React from 'react';
import { servicesData } from '../../data/services';
import { SectionTitle } from '../UI/SectionTitle';
import { CheckCircle2 } from 'lucide-react';
import styles from './Services.module.css';

export const Services = () => {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Offerings"
                    title="Jasa & Pesanan Karya"
                    subtitle="Layanan seni komersial & kustomisasi dekoratif."
                />

                <div className={styles.grid}>
                    {servicesData.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.header} style={{ backgroundColor: service.accentColor }}>
                                <h3 className={`font-heading ${styles.serviceTitle}`}>{service.title}</h3>
                            </div>
                            <div className={styles.body}>
                                <p className={styles.desc}>{service.description}</p>
                                <div className={styles.deliverables}>
                                    <h4 className="font-bold text-xs uppercase mb-2 text-gray-600">Deliverables:</h4>
                                    <ul>
                                        {service.deliverables.map((item, idx) => (
                                            <li key={idx} className={styles.item}>
                                                <CheckCircle2 size={16} className="text-[#7A9B76] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};