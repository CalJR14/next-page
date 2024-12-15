//importar los modulos

import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">Home</Link>
                <Link href="/fonts/about">about</Link>
                <Link href="/fonts/contact">Contact</Link>
            </div>
            <h1>Este website esta especializada en la compra y venta de prodcutos gamer de cualquier categoria</h1>
            <p>Somos la gamer app lider a nivel nacional</p>
        </div>
    );
};

export default About;