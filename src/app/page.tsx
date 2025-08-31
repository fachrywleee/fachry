"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: 20 },
};

export default function Home() {
  return (
    <div>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-300 transition-colors duration-500"
      >
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 border-b border-blue-200 shadow-sm backdrop-blur transition-colors duration-500">
          <div className="container mx-auto px-0 py-3 flex items-center justify-between text-base">
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Fachry Logo"
                width={64}
                height={64}
                className="mr-2"
              />
            </a>
            <ul className="flex gap-8 text-blue-900 font-semibold text-xl">
              <li><a href="#about" className="hover:underline transition-colors">About</a></li>
              <li><a href="#skills" className="hover:underline transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:underline transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-white border border-blue-100 rounded-2xl shadow-xl transition-colors duration-500">
            {/* Header, About, and Skills Section */}
            <header className="text-center mb-16 px-4 py-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 mt-5 rounded-full overflow-hidden border border-blue-200 flex items-center justify-center bg-blue-50 shadow transition-colors duration-500">
                  <Image
                    src="/muka.jpeg"
                    alt="Fachry Profile"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 transition-colors duration-500">
                  Hi, I'm Fachry
                </h1>
                <p className="text-xl md:text-2xl text-blue-700 mb-8 transition-colors duration-500">
                  A Highschool Student & Aspiring Developer
                </p>
              </div>
              {/* About Section */}
              <section id="about" className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center transition-colors duration-500">
                  About Me
                </h2>
                <div className="bg-blue-50 rounded-xl p-8 shadow transition-colors duration-500">
                  <p className="text-lg text-blue-800 leading-relaxed mb-4 transition-colors duration-500">
                    Welcome! I'm a highschool student who loves creating simple, elegant solutions. 
                    I enjoy building clean user experiences and tackling interesting problems.
                  </p>
                  <p className="text-lg text-blue-800 leading-relaxed transition-colors duration-500">
                    When I'm not coding, I play games and hang out with my friends!
                  </p>
                </div>
              </section>
              {/* Skills Section */}
              <section id="skills" className="mb-0">
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center transition-colors duration-500">
                  Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 shadow transition-colors duration-500">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4 transition-colors duration-500">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'React', url: 'https://react.dev/' },
                        { name: 'Next.js', url: 'https://nextjs.org/' },
                        { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
                        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
                      ].map((skill) => (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-blue-900 text-blue-50 rounded-full text-sm transition-all duration-200 hover:scale-110 hover:bg-blue-700 active:scale-95 cursor-pointer"
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 shadow transition-colors duration-500">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4 transition-colors duration-500">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Node.js', url: 'https://nodejs.org/' },
                        { name: 'Laravel', url: 'https://laravel.com/' },
                        { name: 'Express.js', url: 'https://expressjs.com/' }
                      ].map((skill) => (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-blue-900 text-blue-50 rounded-full text-sm transition-all duration-200 hover:scale-110 hover:bg-blue-700 active:scale-95 cursor-pointer"
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </header>
            {/* Contact Section */}
            <section id="contact" className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 transition-colors duration-500">
                Let's Connect
              </h2>
              <div className="bg-blue-50 rounded-xl p-8 shadow transition-colors duration-500">
                <p className="text-lg text-blue-800 mb-6 transition-colors duration-500">
                  Feel free to reach out for new opportunities or just to say hi!
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                  <a
                    href="mailto:xstormzeus@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-blue-50 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200"
                  >
                    Email
                  </a>
                  <a
                    href="https://github.com/fachrywleee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-blue-50 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/aintfchry._"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-blue-50 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}