import React from "react";
import "../assets/Css/Sidbar.css";
import "boxicons";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram,  BsTwitter} from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillHome, AiOutlineFileText } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { MdOutlineImportContacts } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import profil2 from "../assets/images/file.jpeg"

// Votre composant et le reste du code...

function Sidbar(params) {
  return (
    <>
      {/* ======= Mobile nav toggle button =======  */}
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* ======= Header =======  */}
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src={profil2}
              class="img-fluid rounded-circle"
            />
            <h1 class="text-light">
              <a href="index.html">Marie Constance Goa</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a href="#" class="twitter">
               <BsTwitter/>
              </a>
              <a href="#" class="facebook">
                <FaFacebookF/>
              </a>
              <a href="#" class="instagram">
                <BsInstagram/>
              </a>
              <a href="#" class="linkedin">
               <ImLinkedin2/>
              </a>
            </div>
          </div>

          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" class="nav-link scrollto active">
                 <AiFillHome/> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link scrollto">
                  <FiUser/><span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" class="nav-link scrollto">
                  <AiOutlineFileText/> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" class="nav-link scrollto">
                  <MdOutlineImportContacts/> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" class="nav-link scrollto">
                  <BiServer/> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link scrollto">
                  <LuMail/> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu  */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
export default Sidbar;
