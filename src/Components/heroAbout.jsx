import React from "react";
import "../assets/Css/Sidbar.css";
import profil from "../assets/images/profil.jpeg";

function HeroAbout() {
  return (
    <>
      {/* ======= Hero Section ======= */}
      
      <section id="hero" class="">
        <div className="hero-container" data-aos="fade-in">
          <h1>Marie Constance Goa</h1>
          <p>
            Je suis Développeur Frontend JavaScript{" "}
            <span
              className="typed"
              data-typed-items=" Dévelopeur, Maquetteur"
            ></span>
          </p>
        </div>
      </section>
      {/* -- End Hero -- */}
      <main id="main">
        {/* ======= About Section =======  */}
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <h2>À propos</h2>
              <p>
               Ici vous trouverez une petite description de moi
              </p>
            </div>

            <div class="monapropos">
              <div class="col-lg-4" data-aos="fade-right">
                <img src={profil} class="img-fluid" alt="" />
              </div>
              <div class="content" data-aos="fade-left">
                <h3> Web Développeuse.</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="apropos-flex">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Date d'Anniversaire:</strong> <span>24 Août 2001</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Téléphone:</strong> <span>+225 07 88 57 13 46</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Ville:</strong> <span>Abidjan, Côte d'Ivoire</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>22 ans</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Degré:</strong> <span>En Etude de Licence</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Adresse Email:</strong>{" "}
                        <span>goamarieconstance@gmail.com</span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* -- End About Section  */}
      </main>
    </>
  );
}
export default HeroAbout;
