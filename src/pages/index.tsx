//importar los modulos
import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';


const Home: React.FC = () => {
  const showAlert = () => {
    Swal.fire({
      title: 'Bienvenidos a Gamer APP',
      text: 'disfruta de los mejores juegos',
      icon: 'success',
      confirmButtonText: 'Vamos!'
    });
  };

  return(
    <div className="container">
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/fonts/about">catalogo</Link>
        <Link href="/fonts/contact">Contact</Link>
      </div>
      <h1>Pixel Shop</h1>
      <p>Bienvenido al mundo gamer</p>
      <button onClick={showAlert}>click me</button>
    </div>
  );
};
export default Home;
