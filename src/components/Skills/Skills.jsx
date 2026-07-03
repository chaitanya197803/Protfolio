import React, { useEffect, useRef } from "react";
import { SkillsInfo } from "../../constant";
import Tilt from "react-parallax-tilt";

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12 reveal opacity-0">
        <p className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-3 font-medium">What I Know</p>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">SKILLS</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full section-line"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-6 py-10 justify-between">
        {SkillsInfo.map((category, catIndex) => (
          <div
            key={category.title}
            className={`reveal opacity-0 glass-card px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl`}
            style={{ animationDelay: `${catIndex * 150}ms` }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
              <span className="gradient-text-bright">{category.title}</span>
            </h3>

            {/* Skill Items */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center justify-center space-x-2 bg-white/[0.03] border border-gray-700/50 rounded-2xl py-2.5 px-3 text-center hover:border-purple-500/50 hover:bg-purple-500/[0.05] transition-all duration-300 hover:shadow-[0_0_15px_rgba(130,69,236,0.15)]"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;