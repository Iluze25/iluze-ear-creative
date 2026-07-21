import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { SectionTitle } from '../UI/SectionTitle';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

export const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Portfolio Gallery"
                    title="Selected Projects"
                    subtitle="Kumpulan lukisan mural, sketsa karakter, dan eksplorasi visual."
                />

                {/* Filter Buttons */}
                <div className={styles.filterGroup}>
                    {['All', 'Mural', 'Sketch'].map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Cards Grid */}
                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={project.image} alt={project.title} className={styles.image} />
                                    <span className={styles.categoryBadge}>{project.category}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-bold text-[#5B4B8A]">{project.year}</span>
                                        <span className="text-xs font-semibold px-2 py-0.5 bg-amber-200 border border-black">{project.client}</span>
                                    </div>
                                    <h3 className={`font-heading ${styles.title}`}>{project.title}</h3>
                                    <p className={styles.desc}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map(t => (
                                            <span key={t} className={styles.tag}>#{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};