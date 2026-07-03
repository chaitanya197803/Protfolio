import React, { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react';
import codeTyping from "../../assets/animations/CodeTyping.json"

const About = () => {
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
      id='about'
      ref={sectionRef}
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting  */}
          <p className='reveal opacity-0 text-lg sm:text-xl text-gray-400 mb-2 tracking-wider uppercase font-medium' style={{ animationDelay: '0.1s' }}>
            Hello, I am
          </p>
          {/* Name  */}
          <h1 className='reveal  text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight gradient-text' style={{ animationDelay: '0.3s' }}>
            <span className='flex text-white items-center md:justify-start justify-center'>
              Chaitanya Garg
            </span>
          </h1>

          {/* skills heading with typing effect */}
          <h2 className='reveal opacity-0 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight' style={{ animationDelay: '0.5s' }}>
            <span className='flex text-white items-center md:justify-start justify-center'>
              I am a
              <span className="flex text-[#a855f7] ml-2">
                <Typewriter
                  options={{
                    strings: ['Software Engineer', 'React Developer', 'UI/UX Designer', 'Freelancer', 'Full Stack Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </h2>

          {/* About me Paragraph  */}
          <p className='reveal opacity-0 text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed' style={{ animationDelay: '0.7s' }}>
            I am a full-stack developer with over 1 years of experience in building scalable
            web applications. Skilled in both front-end and back-end development, I specialize
            in the MERN stack and other modern technologies to create seamless user experiences
            and efficient solutions.
          </p>

          {/* Resume Button  */}
          <div className='reveal opacity-0' style={{ animationDelay: '0.9s' }}>
            <a
              href="https://drive.google.com/file/d/12U0L7IZxdu4siyLGAwN8dR1OOL4sOpDB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #8245ec, #a855f7, #6366f1)',
                boxShadow: '0 0 20px rgba(130, 69, 236, 0.4), 0 0 60px rgba(130, 69, 236, 0.1)'
              }}
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>

        {/* Right Side  */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <div className='relative animate-float'>
            {/* Glow ring behind the animation */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-3xl scale-110'></div>
            <Lottie
              animationData={codeTyping}
              loop={true}
              className='relative w-full h-full rounded-full object-cover drop-shadow-[0_10px_30px_rgba(130,69,236,0.4)]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
