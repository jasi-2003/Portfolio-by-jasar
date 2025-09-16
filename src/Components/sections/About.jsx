import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../assets/profile.jpg";
export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
  ];

  const backendSkills = ["Python", "Django", "SQL", "REST APIs"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>


          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">

            <div className="z-10 px-6 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start md:space-x-10 mb-8">

              <img
                src={profilePic}
                alt="Jasar Husain"
                className="w-60 h-60 rounded-2xl shadow-lg border-2 border-pink-400 object-cover"
              />

            
            <p className="text-white mb-6">
              Python Django Full-Stack Developer skilled in HTML, CSS,
              JavaScript, React, Bootstrap, MYSQL, and REST APIs,
              with a passion for building scalable web applications. Seeking a
              role to leverage expertise in Django-based development and
              optimize user experiences.
            </p>
           
           
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-red-500 to-pink-400 text-black py-1 px-3 rounded-full text-sm transition hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-red-500 to-pink-400 text-white py-1 px-3 rounded-full text-sm transition hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>
                  <strong>BCA (Bachelor of Computer Applications)</strong> —
                  Calicut University, India (2021–2024)
                </li>
                <li>Relevant Course: Python Full Stack Development</li>
              </ul>
            </div>


            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">
                Work Experience
              </h3>
              <div className="space-y-4 text-white">
                <div>
                  <h4 className="font-semibold">
                    Student Intern — Full-Stack Developer <br />
                    Luminor Technolab, Kochi (Aug 2024 – Jan 2025)
                  </h4>

                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                      Developed full-stack web applications using Django,
                      React.js, MySQL, and REST APIs.
                    </li>
                    <li>
                      Built and integrated user authentication & CRUD
                      operations.
                    </li>
                    <li>
                      Worked on the front end using JavaScript, React.js, and
                      Bootstrap.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
