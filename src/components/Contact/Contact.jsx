import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Button } from '../UI/Button';
import { Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Get in Touch"
                    title="Let's Create Together"
                    subtitle="Punya proyek mural atau komisi ilustrasi? Mari berdiskusi!"
                />

                <div className={styles.grid}>
                    {/* Info Card */}
                    <div className={styles.infoCard}>
                        <h3 className="font-heading text-2xl font-extrabold mb-4">ILUZE EAR</h3>
                        <p className="mb-6 text-sm">
                            Tersedia untuk komisi mural publik/privat, ilustrasi majalah, dan proyek kreatif kustom.
                        </p>

                        <div className={styles.socialList}>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialItem}>

                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialItem}>

                            </a>
                            <a href="iluzeear@gmail.com" className={styles.socialItem}>
                                <Mail size={20} /> iluzeear@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Cth : Aditya Ardiansyah"
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Cth : adityaardiansyah2003@gmail.com"
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Project Detail / Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Ceritakan detail lokasi mural, ukuran, atau proyek ilustrasi Anda..."
                            />
                        </div>
                        <Button type="submit" variant="primary">
                            Send Message <Send size={18} />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
