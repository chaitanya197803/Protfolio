import React, { useEffect, useRef } from 'react'
import { education } from '../../constant'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative'
    >
      {/* Section Title */}
      <div className="text-center mb-16 reveal opacity-0">
        <p className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-3 font-medium">My Journey</p>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">EDUCATION</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full section-line"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line with gradient */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500/80 via-indigo-500/50 to-transparent"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`reveal opacity-0 flex flex-col sm:flex-row items-start sm:items-center mb-12 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <FaGraduationCap className="text-white text-sm" />
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-[calc(50%-3rem)] ml-14 sm:ml-0 ${
                index % 2 === 0 ? "sm:pr-12" : "sm:pl-12 sm:ml-auto"
              }`}
            >
              <div className="glass-card p-6 sm:p-8 rounded-2xl group cursor-default">
                {/* Header with logo */}
                <div className="flex items-center space-x-4 mb-4">
                  {/* School Logo */}
                  <div className="w-14 h-14 bg-white rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Degree & School */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-400">
                      {edu.school}
                    </h4>
                  </div>
                </div>

                {/* Date & Grade */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-gray-700/50">
                    {edu.date}
                  </span>
                  <span className="text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
