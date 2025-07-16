import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Typewriter from 'typewriter-effect';

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
                    strings: ['React Developer', 'UI/UX Designer', 'Freelancer'],
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas
            minus voluptates cupiditate eligendi nostrum. Quisquam voluptate ipsa iusto temporibus
            debitis, sunt obcaecati laboriosam facilis similique cupiditate maxime recusandae praesentium
            aspernatur, numquam ipsum dolore earum pariatur nobis repellendus. Dolores commodi similique
            laborum iusto vel dicta quae iure voluptatibus exercitationem inventore!
          </p>

          {/* Resume Button  */}
          <a
            href="/path/to/your-cv.pdf" // <-- Replace with your actual CV file path or external URL
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
        
      </div>
    </section>
  )
}

export default About
