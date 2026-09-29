const Experience = () => {
  return (
    <section 
        id="experience" 
        className="min-h-screen w-full px-10 py-16 bg-linear-to-br from-[#0F111A] via-[#171335] to-[#241A50]"
    >
        <div className="ml-10 max-w-4xl flex flex-col gap-5">
            {/* Title */}
            <div className="flex items-center gap-5">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
                My
            </h1>

            <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-[#5EA8F7] via-[#A66CF5] to-[#ED6AB5] bg-clip-text text-transparent">
                Journey
            </h1>
            </div>
            <div className="w-28 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-purple-500"></div>
                {/* Description */}
                <p className="text-gray-300 text-lg">
                A comprehensive timeline of my educational background and professional experience
                </p>
        </div>

    </section>
  )
}

export default Experience
