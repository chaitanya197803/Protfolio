import React from 'react'
import Typewriter from 'typewriter-effect';
import Tilt from "react-parallax-tilt";
import aboutImage from "../../assets/aboutImage.png"

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting  */}
          <h1 className='text-3xl sm-text-5xl md-text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name  */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Chaitanya Garg
          </h2>

          {/* skills hedding with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='flex text-white'>
              I am a
              <span className="flex text-[#8245ec]">
                <p>&nbsp;</p>
                <Typewriter
                  options={{
                    strings: ['Software Engineer', 'React Developer', 'UI/UX Designer', 'Freelancer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>

          {/* <ReactTypingEffect text={['Web Devloper','Frontend Developer','Backend Developer']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer={(cursor)=> (
            <span className='text-[#8245ec]'>{cursor}</span>
          )}
          ></ReactTypingEffect> */}

          </h3>

          {/* About me Paragraph  */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a full-stack developer with over 1 years of experience in building scalable 
            web applications. Skilled in both front-end and back-end development, I specialize 
            in the MERN stack and other modern technologies to create seamless user experiences 
            and efficient solutions.
          </p>

          {/* Resume Button  */}
          <a
            href="https://drive.google.com/file/d/12U0L7IZxdu4siyLGAwN8dR1OOL4sOpDB/view?usp=drive_link" // <-- Replace with your actual CV file path or external URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 40px #8245ec'
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side  */}
            <div className='md:w-1/2 flex justify-center md:justify-end'>
              <img 
              src={aboutImage} 
              alt="Chaitanya Garg" 
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
              />
            </div>

            
      </div>
    </section>
  )
}

export default About
