import React from 'react'
import { education } from '../../constant'

const Education = () => {
  return (
    <section
      id="education"
      // className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 "
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-xl font-semibold">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>


      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {education.map((education, index) => (
          <div
            key={education.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            {/* Timeline Circle */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div> */}

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-30 h-22 bg-white rounded-md overflow-hidden">
                  <img
                    src={education.img}
                    alt={education.degree}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {education.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {education.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{education.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{education.desc}</p>
              {/* <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div> */}

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
