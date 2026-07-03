import React, { useEffect, useRef } from 'react'
import { experiences } from '../../constant'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16 reveal opacity-0">
        <p className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-3 font-medium">Where I've Worked</p>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full section-line"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line with gradient */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500/80 via-indigo-500/50 to-transparent"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`reveal opacity-0 flex flex-col sm:flex-row items-start sm:items-center mb-12 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                experience.isCurrent 
                  ? 'bg-gradient-to-br from-green-400 to-emerald-600 animate-present-pulse' 
                  : 'bg-gradient-to-br from-purple-500 to-indigo-600'
              } shadow-lg`}>
                <FaBriefcase className="text-white text-sm" />
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
                  {/* Company Logo/Icon */}
                  <div className={`w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center shrink-0 ${
                    experience.img ? 'bg-white' : 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30'
                  }`}>
                    {experience.img ? (
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold gradient-text">
                        {experience.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 truncate">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-400">
                      {experience.company}
                    </h4>
                  </div>
                </div>

                {/* Date with badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-gray-700/50">
                    {experience.date}
                  </span>
                  {experience.isCurrent && (
                    <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30 animate-present-pulse">
                      ● Current
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div>
                  <h5 className="font-medium text-gray-300 text-xs uppercase tracking-wider mb-3">Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
