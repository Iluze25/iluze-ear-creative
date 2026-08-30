import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { Button } from '../UI/Button';
import { Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { supabase } from "../../lib/supabase.js"

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', whatsapp: '' });

    // Mengirim data ke database
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("HANDLE SUBMIT JALAN")

        const { data, error } = await supabase
            .from("contacts")
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    whatsapp: formData.whatsapp
                }
            ])
            .select()

        console.log("DATA:", data)
        console.log("ERROR:", error)

        if (error) {
            alert(error.message)
            return
        }

        alert("Pesan Berhasil Dikirim")
    }

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    tag="Get in Touch"
                    title="Let's Create Together"
                    subtitle="Punya proyek mural atau ingin mengabadikan seseorang melalui sketsa realistis? Mari berdiskusi"
                />

                <div className={styles.grid}>
                    {/* Info Card */}
                    <div className={styles.infoCard}>
                        <h3 className="font-heading text-2xl font-extrabold mb-4">ILUZE EAR CREATIVE</h3>
                        <p className="mb-6 text-sm">
                            Menerima jasa mural untuk usaha, hunian, dan ruang publik, dari konsep visual hingga pengerjaan mural langsung di lokasi.
                        </p>

                        <div className={styles.socialList}>
                            <a href="https://www.instagram.com/iluze_ear.creative/" target="_blank" rel="noreferrer" className={styles.socialItem}>
                                <FaInstagram size={20} /> @iluze_ear.creative
                            </a>
                            <a href="https://www.tiktok.com/@iluzeear" target="_blank" rel="noreferrer" className={styles.socialItem}>
                                <FaTiktok size={20} /> @iluzeear

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
                                placeholder="Cth : iluzeear@gmail.com"
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
                        <button className={styles.button} type="submit" variant="primary">
                            Kirim Pesan <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
