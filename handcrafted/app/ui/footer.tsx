// components/Footer.js
import React from 'react';
import styles from '../ui/home.module.css'
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4fc442165ae956cef8f74c733269d2346930d984
import AcmeLogo from './acme-logo';
export default function Footer() {
    return (
        <footer className="bg-[#906951] text-white p-4 m-6 rounded-lg">

            <div className="container mx-auto px-4">
                <AcmeLogo />
<<<<<<< HEAD
=======
export default function Footer() {
    return (
        <footer className="bg-[#906951] text-white p-4 m-6 rounded-lg">
            <div className="container mx-auto px-4">
>>>>>>> 8ad0563 (feat: added the footer component to the layout)
=======
>>>>>>> 4fc442165ae956cef8f74c733269d2346930d984
                <p className="text-center">&copy; {new Date().getFullYear()} HANDCRAFTEDHAVEN. All rights reserved.</p>
                <nav>
                    <ul className="flex justify-center space-x-4 mt-4">
                        <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
                        <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
                        <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};


