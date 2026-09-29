import { FileDown, ChevronDown, ChevronRight } from "lucide-react"

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-linear-to-br from-[#0F111A] via-[#171335] to-[#241A50]"
    >
      <div className="ml-24 max-w-4xl flex flex-col gap-5">

        {/* Welcome */}
        <h1 className="text-blue-400 font-bold text-[15px]">
          WELCOME TO MY DIGITAL PORTFOLIO
        </h1>

        {/* Name */}
        <h2 className="text-6xl font-bold bg-linear-to-r from-[#5EA8F7] via-[#A66CF5] to-[#ED6AB5] bg-clip-text text-transparent">
          Khalid N. Jinabade
        </h2>

        {/* Gradient Line */}
        <div className="w-28 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-purple-500"></div>

        <div className="text-3xl font-bold text-white">Data Analytics & Python Backend Developer</div>

        <div className="flex flex-wrap items-center gap-2 text-2xl font-medium text-gray-200">
          <span>Crafting</span>
          <span className="px-2 py-1.5 text-blue-400 font-semibold border border-blue-500/40 bg-blue-500/10 rounded-xl hover:border-blue-600 hover:bg-blue-500/20 hover:scale-103 transition-transform duration-500 inline-block">innovative</span>
          <span>&</span>
          <span className="px-2 py-1.5 text-purple-400 font-semibold border border-purple-500/40 bg-purple-500/10 rounded-xl hover:border-purple-600 hover:bg-purple-500/20 hover:scale-103 transition-transform duration-500 inline-block">scalable</span>
          <span>web solutions</span>

        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-6 w-[65%] ">
          My strengths are in Python, Flask, MySQL, Data Analytics, and backend
          development. I also work with React, JavaScript, HTML, CSS, and
          Tailwind CSS, and I’m continuously improving my frontend development
          and UI design skills. I love learning new technologies, solving
          real-world problems, and improving my skills through hands-on
          projects. My goal is to grow as a developer and data professional
          while creating practical, efficient, and user-friendly solutions.
        </p>
        <div className="flex items-center gap-4">
          {/* GitHub */}
             <a
                href="https://github.com/khalidjinabade08-afk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group w-fit flex items-center justify-center border border-gray-700 rounded-xl p-2 bg-white/5 shadow-xl hover:bg-white/10 hover:border-gray-600 hover:scale-120 hover:rotate-12 transition-all duration-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 fill-white group-hover:fill-[#0b0b0b] transition-all duration-300"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.01 3.24 9.26 7.73 10.76.56.1.77-.24.77-.54v-2.11c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.59 0-1.24.44-2.25 1.16-3.04-.12-.28-.5-1.44.11-3 0 0 .95-.3 3.09 1.16a10.71 10.71 0 0 1 5.62 0C16.85 4.87 17.8 5.17 17.8 5.17c.61 1.56.23 2.72.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.3-5.17 5.58.4.35.76 1.04.76 2.1v3.08c0 .3.2.65.78.54a11.26 11.26 0 0 0 7.72-10.76C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/khalid-jinabade-670b76421/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group w-fit flex items-center justify-center border border-gray-700 rounded-xl p-2 bg-white/5 shadow-xl hover:bg-white/10 hover:border-blue-500/50 hover:scale-120 hover:-rotate-12 transition-all duration-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 fill-white group-hover:fill-[#0A66C2] transition-all duration-300"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.8c0-2.1-.04-4.8-2.93-4.8-2.93 0-3.38 2.29-3.38 4.65V24h-4V8z"/>
                </svg>
              </a>

              {/* Resume */}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-14 flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 text-white font-bold text-lg shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-blue-500/40 transition-all duration-600">
                  <span className="text group-hover:translate-y-1 transition-transform duration-500">Resume</span>
                  <FileDown size={24} className="group-hover:translate-y-1 translate-transfrom duration-500"/>
              </a>

              {/* Contact */}
              <a 
                href="#contact"
                className="group h-14 px-4 py-4 flex items-center justify-center rounded-xl bg-linear-to-r from-cyan-400 via-purple-500 to-pink-400 text-white font-bold text-lg shadow-lg shadow-purple-500/20  hover:scale-105 hover:shadow-purple-500/40 transition-all duration-500"
                >
                  <span>Let`s Connect</span>
                  <ChevronRight size={28} strokeWidth={2} className="animate-arrowMove"/>
              </a>
          </div>
          <div className="absolute bottom-6 left-36 -translate-x-1/2 flex items-center gap-2">
            <p className="text-gray-300 text-sm font-medium">
              Explore my work
            </p>

            <ChevronDown
              size={28}
              strokeWidth={2}
              className="text-gray-300 animate-arrowDown"
            />
          </div>
          
        </div>

    </section>
  );
};

export default Home;