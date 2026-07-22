import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../UI/SectionTitle';
import styles from './About.module.css';
import { projectsData } from "../../data/projects.js"
import iluzeear from "./iluzeear.jpg"

export const About = () => {
    const totalProjects = projectsData.length
    const totalMural = projectsData.filter((project) => project.category === "Mural").length
    const totalSketch = projectsData.filter((project) => project.category === "Sketch").length
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Artist Statement"
                    title="Siapakah ILUZE EAR itu ?"
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
                            src={iluzeear}
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
                            Halo saya <strong>Aditya Ardiansyah</strong>, seniman di balik <strong>Iluze Ear</strong>. Karya saya berfokus pada eksplorasi mural dan sketsa realistis sebagai media untuk menangkap karakter, cerita, dan emosi melalui garis serta ruang.
                        </p>
                        <p>
                            Dalam setiap karya, saya menggabungkan ketelitian detail, tekstur handmade, dan pendekatan visual yang personal. Saya percaya bahwa sebuah karya tidak hanya hadir untuk memperindah ruang, tetapi juga membawa identitas, pesan, dan pengalaman yang dapat dirasakan oleh orang yang melihatnya.
                        </p>
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className="font-heading text-3xl font-extrabold">{totalMural}+</span>
                                <span className="text-sm">Mural Publik</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className="font-heading text-3xl font-extrabold">{totalSketch}+</span>
                                <span className="text-sm">Sketsa & Karya Seni</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};