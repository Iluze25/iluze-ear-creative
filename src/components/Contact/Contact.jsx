import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Button } from '../UI/Button';
import { Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', whatsapp: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ name: '', email: '', message: '', whatsapp: '' });
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
                        <h3 className="font-heading text-2xl font-extrabold mb-4">ILUZE EAR CREATIVE</h3>
                        <p className="mb-6 text-sm">
                            Tersedia untuk komisi mural publik/privat, ilustrasi majalah, dan proyek kreatif kustom.
                        </p>

                        <div className={styles.socialList}>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialItem}>
                                <FaInstagram size={20} /> Instagram
                            </a>
                            <a href="https://www.tiktok.com/@iluzeear" target="_blank" rel="noreferrer" className={styles.socialItem}>
                                <FaTiktok size={20} /> Tiktok

                            </a>
                            <a href="https://wa.me/6283176470171" target="_blank" rel="noreferrer" className={styles.socialItem}>
                                <FaWhatsapp size={20} /> +62 831 7647 0171

                            </a>
                            <a href="iluzeear@gmail.com" className={styles.socialItem}>
                                <Mail size={20} /> iluzeear@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label htmlFor="name">Nama Kamu</label>
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
                            <label htmlFor="email">Email</label>
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
                            <label htmlFor='whatsapp'>Whatsapp</label>
                            <input
                                id="whatsapp"
                                type="tel"
                                required
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                placeholder="Cth : +6283176470171"
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Detail Project / Pesae</label>
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
                            Kirim Pesan <Send size={18} />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
