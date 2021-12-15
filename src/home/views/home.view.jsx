// vendors
import React from "react";
import { Link } from 'react-router-dom';
import './home.view.css';  
import jwt from 'jsonwebtoken';

// assets
import logo from './ciencia.jpg';
import logo2 from './proyecto.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import persona1 from './persona1.jpg';
import persona2 from './persona2.jpg';

const Home = () => {

  const token = sessionStorage.getItem('token');
  const user = jwt.decode(token)?.user;

  return (
    <>
      <main>
        <section className="container">
          <div>
            <figure>
              <img src={logo} className="container background" alt="" />
              <div className="contenido-textos"></div>
            </figure>
          </div> 
          <h2 className="titulo">Bienvenido {user.fullName} 👋</h2>
        </section>


        <section className="contenedor sobre-nosotros">
          <h2 className="titulo">Nuestro producto</h2>
          <div className="contenedor-sobre-nosotros">
            <figure>
              <img src={logo2} className="imagen-about-us" alt="" />
            </figure>
            <div className="contenido-textos">
              <h3><span>1</span>Organiza tus proyectos e invitalos a todos!</h3>
              <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Maxime, incidunt asperiores 
                 provident voluptatum suscipit atque rem veniam 
                 officiis pariatur! Eveniet harum pariatur quae
                  sunt odio explicabo. Tenetur error a sapiente.
              </p>
              <h3><span>2</span>Escribe tus avances!</h3>
              <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Maxime, incidunt asperiores 
                 provident voluptatum suscipit atque rem veniam 
                 officiis pariatur! Eveniet harum pariatur quae
                  sunt odio explicabo. Tenetur error a sapiente.
              </p>

            </div>
          </div>
          <h2 className="titulo">Administra tus proyectos con Prototype</h2>
        </section>


        <section className="portafolio">
          <div className="contenedor">
            <h2 className="titulo">Portafolio</h2>
            <div className="galeria-port">
              <div className="imagen-port">
                <figure>
                  <img src={img1} alt="" />
                </figure>
                <div className="hover-galeria">
                  <p>Nuestro Trabajo</p>
                </div>
              </div>
              <div className="imagen-port">
                <figure>
                  <img src={img2} alt="" />
                </figure>
                <div className="hover-galeria">
                  <p>Nuestro Trabajo</p>
                </div>
              </div>
              <div className="imagen-port">
                <figure>
                  <img src={img3} alt="" />
                </figure>
                <div className="hover-galeria">
                  <p>Nuestro Trabajo</p>
                </div>
              </div>
              <div className="imagen-port">
                <figure>
                  <img src={img4} alt="" />
                </figure>
                <div className="hover-galeria">
                  <p>Nuestro Trabajo</p> 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clientes contenedor">
          <h2 className="titulo">Que dicen nuestros clientes</h2>
          <div className="cards">
            <div className="card">
              <figure>
                <img src={persona1} alt="" />
              </figure>
              <div className="contenido-texto-card">
                <h4>Andrea Ramirez</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Aliquid corrupti expedita dicta fuga aliquam quam excepturi 
                  porro quia accusamus officiis, magni accusantium suscipit ea 
                  ipsa quis iusto ab eligendi a.
                </p>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src={persona2} alt="" />
              </figure>
              <div className="contenido-texto-card">
                <h4>Camilo Gonzales</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Aliquid corrupti expedita dicta fuga aliquam quam excepturi 
                  porro quia accusamus officiis, magni accusantium suscipit ea 
                  ipsa quis iusto ab eligendi a.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <footer>
        <div className="contenedor-footer">
          <div className="content-foo">
            <h4>Phone</h4>
            <p>154-913-2110</p>
          </div>
          <div className="content-foo">
            <h4>Email</h4>
            <p>email@gmail.com</p>
          </div>
          <div className="content-foo">
            <h4>Location</h4>
            <p>Ubicacion Carrera 20 3 c25</p>
          </div>
        </div>
        <h2 className="titulo-final">Prototype Design | MinTIC 2022</h2>
      </footer>
    </>
  );
};

export default Home;
