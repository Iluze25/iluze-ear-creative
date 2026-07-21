import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../UI/SectionTitle';
import styles from './About.module.css';

export const About = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Artist Statement"
                    title="Who is Iluze Ear?"
                    subtitle="Seorang pengembara visual yang melihat tembok kota dan lembaran kosong sebagai arena bercerita."
                />

                <div className={styles.grid}>
                    <motion.div
                        className={styles.imageCard}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop"
                            alt="Iluze Ear Studio"
                            className={styles.artistPhoto}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.bioText}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Halo, saya <strong>Iluze Ear</strong>. Fokus karya saya berakar pada eksplorasi seni mural, sketsa analog, dan penceritaan visual berbasis narasi lokal.
                        </p>
                        <p>
                            Pendekatan saya mengombinasikan tekstur organik, garis tinta yang ekspresif, dan eksperimen ruang. Saya percaya bahwa seni publik atau ilustrasi editorial harus memiliki jiwa handmade yang tidak kaku, jujur, dan berani tampil beda dari estetika digital komersial yang terlalu halus.
                        </p>
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className="font-heading text-3xl font-extrabold">35+</span>
                                <span className="text-sm">Public Murals</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className="font-heading text-3xl font-extrabold">120+</span>
                                <span className="text-sm">Sketches & Artworks</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};