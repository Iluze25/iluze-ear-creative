import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brush, PenTool } from 'lucide-react';
import { Button } from '../UI/Button';
import styles from './Hero.module.css';
import AiSopiah from '../../assets/Ai Sopiah.jpg'

export const Hero = () => {
    return (
        <section id="hero" className={styles.heroSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.badge}>
                        <Brush size={16} />
                        <span>Seniman Mural & Sketsa Realis</span>
                    </div>

                    <h1 className={`font-heading ${styles.heading}`}>
                        Visual Artist Creating Stories Through <span className={styles.highlightText}>Walls and Lines</span>
                    </h1>

                    <p className={styles.subheading}>
                        Menciptakan karya visual melalui sketsa realistis dan mural, menghadirkan karakter serta cerita yang sesuai dengan setiap ruang.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowUpRight size={18} />
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.visualWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.heroCard}>
                        <img
                            src={AiSopiah}      
                            alt="Iluze Ear Artwork"
                            className={styles.heroImage}
                        />
                        <div className={styles.floatingBadge}>
                            <PenTool size={20} className="text-[#171717]" />
                            <span>Handcrafted Artwork</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
