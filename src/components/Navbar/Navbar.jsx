import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { PiPaintBrushBroadBold } from "react-icons/pi";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Beranda', path: '#hero' },
        { name: 'Tentang', path: '#about' },
        { name: 'Proyek', path: '#projects' },
        { name: 'Perjalanan', path: '#experience' },
        { name: 'Layanan', path: '#services' },
        { name: 'Kontak', path: '#contact' },
    ];

    const handleScroll = (id) => {
        setIsOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <a href="#hero" className={styles.logo}>
                    <PiPaintBrushBroadBold className="w-6 h-6 text-[#5B4B8A]" />
                    <span className="font-heading">ILUZE EAR creative | Tasikmalaya</span>
                </a>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(item.path);
                            }}
                            className={styles.navLink}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Toggle */}
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Navigation">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(item.path);
                            }}
                            className={styles.mobileNavLink}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};