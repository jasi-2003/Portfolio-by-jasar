import { RevealOnScroll } from "../RevealOnScroll";
import ecommerceImg from "../../assets/ecommerce.png";
import doctorImg from "../../assets/doctor.png"


export const Projects = () => {
  const projects = [
    { 
      img: ecommerceImg, 
      title: "E-commerce Application",
      description: [
        "Designed and developed a web-based e-commerce platform...",
        "Created a responsive and visually appealing interface..."
      ],
      tech: ["Python", "Django", "SQLite", "HTML", "CSS", "Bootstrap"],
      link: "https://github.com/jasi-2003/ecommerce.git",
    },
    {
      img: doctorImg,  
      title: "Nearest Doctor Booking",
      description: [
        "Designed and developed a doctor booking platform...",
        "Built a responsive and modern UI..."
      ],
      tech: ["Python", "Anaconda", "SQLite", "HTML", "CSS", "Bootstrap"],
      link: "https://github.com/jasi-2003/Nearest_Doctor_Booking.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center">
            View Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-red-100">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <img  
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg shadow-md mb-4"
                />

                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>

                <ul className="list-disc pl-5 text-white mb-4 space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-red-500 to-pink-400 text-black py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="bg-gradient-to-r from-red-500 to-pink-400 text-black py-1 px-4 rounded-full transition-colors my-4"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
