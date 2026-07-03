import React, { useEffect, useRef } from 'react'
import { projects } from '../../constant'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id='work'
      ref={sectionRef}
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      {/* Section Title  */}
      <div className="text-center mb-16 reveal opacity-0">
        <p className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-3 font-medium">What I've Built</p>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">PROJECTS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full section-line"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/* Project Grid  */}
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className='reveal opacity-0 glass-card rounded-2xl overflow-hidden group'
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className='relative overflow-hidden'>
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#050404] via-transparent to-transparent opacity-60'></div>
              
              {/* Overlay buttons */}
              <div className='absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm'>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <FaGithub className="text-white text-lg" />
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-white text-sm" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className='p-6'>
              <h3 className='text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3'>
                {project.description}
              </p>
              
              {/* Tags */}
              <div className='flex flex-wrap gap-1.5'>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
