import { RevealOnScroll } from "../RevealOnScroll";

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
              className="bg-gradient-to-r from-red-500 to-pink-400 text-white py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10 "
              target="_blank"
            >
              GitHub
            </a>
               <a
              href="https://www.linkedin.com/in/jasar-husain-83b282248/"
              className="bg-gradient-to-r from-red-500 to-pink-400 text-white py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10"
              target="_blank"
            >
            LinkedIn
            </a>
            
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-red-500 to-pink-400 text-black py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-red-500 to-pink-400 text-black py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10"
            >
              Contact Me
            </a>
           
          </div>
       
        </div>
      </RevealOnScroll>
    </section>
  );
};
