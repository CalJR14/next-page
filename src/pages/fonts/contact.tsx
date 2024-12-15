// importa os modulos

import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

const Contact: React.FC = () => {
    const handleContact = () => {
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'nos pondremos en contacto contigo pronto',
            icon:'info',
            confirmButtonText: 'Aceptar'
        });
    };

    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">Home</Link>
                <Link href="/fonts/about">about</Link>
                <Link href="/fonts/contact">Contact</Link>
            </div>
            <h1>Contactenos</h1>
            <button onClick={handleContact}> Enviar Datos</button>
        </div>
    );
};

export default Contact;
