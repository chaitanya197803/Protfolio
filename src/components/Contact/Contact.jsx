import React, { useEffect, useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
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

  const socials = [
    {
      icon: <FaGithub size={22} />,
      label: 'GitHub',
      link: 'https://github.com/chaitanya197803',
      color: 'hover:text-white hover:border-white/40',
    },
    {
      icon: <FaLinkedin size={22} />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/chaitanya-garg-se/',
      color: 'hover:text-blue-400 hover:border-blue-400/40',
    },
    {
      icon: <FaInstagram size={22} />,
      label: 'Instagram',
      link: 'https://www.instagram.com/sagar.oo3/',
      color: 'hover:text-pink-400 hover:border-pink-400/40',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className='py-24 pb-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      <div className="text-center reveal opacity-0">
        <p className="text-sm tracking-[0.3em] uppercase text-purple-400 mb-3 font-medium">Get In Touch</p>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">CONTACT</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full section-line"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto leading-relaxed">
          Feel free to reach out to me for any collaboration, freelance work, or just to say hello!
        </p>
      </div>

      {/* Email Button */}
      <div className="reveal opacity-0 text-center mt-10" style={{ animationDelay: '200ms' }}>
        <a
          href="mailto:chaitanyagarg1978@gmail.com"
          className="group inline-flex items-center gap-3 text-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #8245ec, #a855f7, #6366f1)',
            boxShadow: '0 0 20px rgba(130, 69, 236, 0.3), 0 0 60px rgba(130, 69, 236, 0.1)'
          }}
        >
          <FaEnvelope className="text-xl group-hover:animate-bounce" />
          Say Hello 👋
        </a>
      </div>

      {/* Social Links */}
      <div className="reveal opacity-0 flex justify-center gap-4 mt-8" style={{ animationDelay: '400ms' }}>
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-xl border border-gray-700/50 bg-white/[0.03] flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 ${social.color}`}
            title={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
