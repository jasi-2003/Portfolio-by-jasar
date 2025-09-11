import { RevealOnScroll } from "../RevealOnScroll";
import { FaEye, FaEnvelope, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          
        <h1 className="text-5xl md:text-7xl font-medium mb-6 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent leading-tight">
          I'am JasarHusain
        </h1>

        <p className="text-white text-lg mb-8 max-w-lg mx-auto">
          I am a full-stack developer with a passion for building
          scalable web applications.
          I work on Django-based development
          and strive to optimize user experiences.
        </p>
        <div className="flex justify-center space-x-4  ml-6.5 mb-6">

          <a
            href="https://github.com/jasi-2003"
            className="text-white hover:text-red-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />

          </a>

          <a
            href="https://www.linkedin.com/in/jasar-husain-83b282248/"
            className="text-white hover:text-red-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 " />

          </a>
          <a
            href="https://www.instagram.com/__jasiiir__/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-300 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />

          </a>
          <a href="https://wa.me/<YourPhoneNumber>"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-300 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="text-white hover:text-red-300 transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />

          </a>


        </div>



      </div>
    </RevealOnScroll>
    </section >
  );
};
