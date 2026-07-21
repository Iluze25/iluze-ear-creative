import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Palette, PenTool, Layers, Frame, Lightbulb, Sparkles } from 'lucide-react';
import { skillsList } from "../../data/skills.js"
import styles from './Skills.module.css';

export const Skills = () => {


    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Expertise"
                    title="Artistic Skills"
                    subtitle="Keahlian teknis dan konseptual dalam berkarya."
                />

                <div className={styles.grid}>
                    {skillsList.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div key={skill.name} className={styles.skillCard}>
                                <div className={styles.iconBox}>
                                    <Icon size={28} />
                                </div>
                                <h3 className={`font-heading ${styles.skillTitle}`}>{skill.name}</h3>
                                <p className={styles.skillDesc}>{skill.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};