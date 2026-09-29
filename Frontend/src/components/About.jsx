const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-10 py-16 bg-linear-to-br from-[#0F111A] via-[#171335] to-[#241A50]"
    >
      {/* ================= HEADER ================= */}
      <div className="ml-10 max-w-4xl flex flex-col gap-5">

        {/* Title */}
        <div className="flex items-center gap-5">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            About
          </h1>

          <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-[#5EA8F7] via-[#A66CF5] to-[#ED6AB5] bg-clip-text text-transparent">
            Me
          </h1>
        </div>

        {/* Underline */}
        <div className="w-28 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-purple-500"></div>

        {/* Description */}
        <p className="text-gray-300 text-lg">
          Discover my journey, passion, and focus in development and data
          analytics.
        </p>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 px-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">


          {/* MY JOURNEY */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 hover:border-blue-400 hover:scale-105 transition-transform duration-500 inline-block">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-linear-to-b from-blue-400 to-purple-500"></div>

              <h2 className="text-2xl font-bold text-white">
                My Journey
              </h2>
            </div>

            <p className="text-gray-300 leading-7">
              I am currently pursuing a Bachelor of Computer Applications
              (BCA). Alongside my degree, I am learning Data Analytics through
              online courses. I am also building my development skills, with
              Python for backend development and React.js for frontend
              development.
            </p>

          </div>


          {/* MY FOCUS */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 hover:border-purple-400 hover:scale-105 transition-transform duration-500 inline-block">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-linear-to-b from-purple-400 to-pink-500"></div>

              <h2 className="text-2xl font-bold text-white">
                My Focus
              </h2>
            </div>

            <p className="text-gray-300 leading-7">
              My main focus is on Data Analytics and Frontend Development.
              I am also learning to use AI tools effectively to improve
              productivity, automate repetitive tasks, and reduce the time
              required to complete my work.
            </p>

          </div>


          {/* MY GOAL */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 hover:border-pink-400 hover:scale-105 transition-transform duration-500 inline-block">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-linear-to-b from-pink-400 to-purple-500"></div>

              <h2 className="text-2xl font-bold text-white">
                My Goal
              </h2>
            </div>

            <p className="text-gray-300 leading-7">
              My goal is to become a skilled Data Analyst and build a strong
              career in Data Analytics. I want to continuously improve my
              analytical, technical, and problem-solving skills by working
              with real-world data and practical projects.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">


          {/* STAT CARDS */}
          <div className="grid grid-cols-2 gap-5">


            {/* Projects */}
            <div className="min-h-44 rounded-3xl p-8 flex flex-col justify-center bg-linear-to-br from-[#2868EE] to-[#2546B8] shadow-xl hover:border hover:border-[#7E22B8] hover:scale-105  transition-all duration-500">

              <h2 className="text-5xl md:text-6xl font-bold text-white">
                7+
              </h2>

              <p className="mt-4 text-xl font-semibold text-white/90">
                Projects Completed
              </p>

            </div>


            {/* Technologies */}
            <div className="min-h-44 rounded-3xl p-8 flex flex-col justify-center bg-linear-to-br from-[#9635EE] to-[#7E22B8] shadow-xl hover:border hover:border-pink-400 hover:scale-105  transition-all duration-500">

              <h2 className="text-5xl md:text-6xl font-bold text-white">
                16+
              </h2>

              <p className="mt-4 text-xl font-semibold text-white/90">
                Technologies
              </p>

            </div>


            {/* Experience */}
            <div className="min-h-44 rounded-3xl p-8 flex flex-col justify-center bg-linear-to-br from-[#E3216D] to-[#B41558] shadow-xl hover:border hover:border-[#2868EE] hover:scale-105 transition-all duration-500">

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Fresher
              </h2>

              <p className="mt-4 text-xl font-semibold text-white/90">
                Building Experience
              </p>

            </div>


            {/* Dedication */}
            <div className="min-h-44 rounded-3xl p-8 flex flex-col justify-center bg-linear-to-br from-[#5751F5] to-[#4234B9] shadow-xl hover:border hover:border-blue-300 hover:scale-105 transition-all duration-500">

              <h2 className="text-5xl md:text-6xl font-bold text-white">
                100%
              </h2>

              <p className="mt-4 text-xl font-semibold text-white/90">
                Dedication
              </p>

            </div>

          </div>


          {/* ================= BEYOND CODING ================= */}
          <div className="rounded-3xl border border-white/20 bg-[#121529]/80 p-8 hover:border-blue-300 hover:scale-105 transition-all duration-500">

            <h2 className="text-3xl font-bold text-white mb-8">
              Beyond Coding
            </h2>


            {/* Gaming */}
            <div className="flex items-center gap-5 mb-6 ">

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-linear-to-br from-blue-500 to-purple-600 hover:scale-105 transition-all duration-300">
                🎮
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Gaming
                </h3>

                <p className="text-gray-400">
                  Strategic thinking & problem solving
                </p>
              </div>

            </div>


            {/* Reading */}
            <div className="flex items-center gap-5 mb-6">

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-linear-to-br from-purple-500 to-pink-500 hover:scale-105 transition-all duration-300">
                📚
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Reading
                </h3>

                <p className="text-gray-400">
                  Technology & data analytics insights
                </p>
              </div>

            </div>


            {/* Innovation */}
            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-linear-to-br from-pink-500 to-red-500 hover:scale-105 transition-all duration-300">
                💡
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Innovation
                </h3>

                <p className="text-gray-400">
                  Exploring new ideas & technologies
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;