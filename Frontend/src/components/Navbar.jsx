import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0F111A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Name */}
        <a
          href="#home"
          className="text-2xl text-white font-bold"
        >
          Khalid Jinabade
          <span className="text-blue-500">.</span>
        </a>

        {/* Navbar Links */}
        <div className="flex items-center gap-2">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`
                relative
                px-3
                py-2
                rounded-lg
                border
                font-semibold
                text-base
                transition-all
                duration-300

                ${
                  active === link.id
                    ? "text-white border-blue-500 bg-white/10"
                    : "text-gray-200 border-transparent hover:text-blue-400 hover:bg-white/5"
                }
              `}
            >
              {link.name}

              {/* Active underline */}
              {active === link.id && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-8
                    h-0.5
                    rounded-full
                    bg-linear-to-r
                    from-blue-400
                    via-purple-400
                    to-pink-400
                  "
                />
              )}

            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;