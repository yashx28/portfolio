import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import heroImage from './assets/yash.JPG'; // <- replace with your image
import about1 from './assets/about1.png'; // <- replace with your image
import contact from './assets/contact.png'; // <- replace with your image
import HERO from './assets/yash1.JPG'; // <- replace with your image

AOS.init();

const sections = ["about", "skills", "projects", "contact"];

const skillData = [
  'HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'NextJS', 'MongoDB', 'TailwindCSS'
];
const App = () => {
  return (
 <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Portfolio</h1>
        <nav className="space-x-6 hidden md:flex items-center">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="capitalize text-gray-800 hover:text-blue-600 cursor-pointer"
            >
              {section}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Hire Me
          </ScrollLink>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-20 pt-28 bg-white" id="home">
        <div data-aos="fade-left"  data-aos-duration="1500">
          <h2 className="text-4xl font-bold text-gray-800">Full Stack Web Developer</h2>
          <h3 className="text-2xl mt-2 text-gray-700">Mr. Yash</h3>
          <p className="mt-4 text-gray-600 max-w-md">
           A passionate Web Developer and Instructor with hands-on experience gained through personal, academic, and freelance projects.”.
          </p>
            <a
    href="/resume.pdf"
    download
    className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Download Resume
  </a>
        </div>
        <div data-aos="fade-right"  data-aos-duration="1500">
          <img src={HERO} alt="Yash" className="w-64 md:w-96 h-[45%] rounded-full animate-pulse" />
        </div>
      </section>
        <section className='p-8 bg-gray-300'>
          <div className=' flex itens-center justify-around'>
            <h1 className='text-cyan-800 text-3xl'>DETAILS MASTER</h1>
            <h1 className='text-cyan-800 text-3xl'>FAST LEARNER</h1>
            <h1 className='text-cyan-800 text-3xl'>TEAM WORK</h1>

          </div>

      </section>

      {/* About Me */}
      <section id="about" className=" py-20 bg-gray-100 px-6 md:px-20 flex flex-col md:flex-row items-center  gap-60">
        <div data-aos="fade-up"  data-aos-duration="1500"  className="flex-1">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
          <p className="text-gray-700">
            I'm a creative and detail-oriented full-stack developer with a passion for building user-friendly and scalable web applications. I specialize in crafting clean code and delivering pixel-perfect designs.
          </p>
          <ScrollLink to="projects" smooth duration={500} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Projects
          </ScrollLink>
        </div>
        <div data-aos="zoom-in"   data-aos-duration="1500"className="flex-1 ">
          <img src={about1} alt="About" className="w-96 rounded-xl shadow-lg" />
        </div>
      </section>
    

         {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-white text-center text-white">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">My Skills</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          I not only work with these technologies but excel in using them with best practices to deliver high-quality results.
          I have been working with all these skills to build my portfolio projects.
        </p>

        <div className="flex flex-wrap justify-center  gap-6" data-aos="fade-up"  data-aos-duration="1500">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-cyan-800 rounded-t-full w-20 h-52 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-20 shadow-md">
                <span className="text-lg font-bold  text-blue-600">{skill[0]}</span>
              </div>
              <p className="mb-7 font-semibold text-sm text-white items-center justify-start transform -rotate-90 whitespace-nowrap">{skill}</p>
            </div>
          ))}
        </div>
      </section>
  <section className='p-8 bg-gray-300'>
          <div className=' flex itens-center justify-around'>
            <h1 className='text-cyan-800 text-3xl'>DETAILS MASTER</h1>
            <h1 className='text-cyan-800 text-3xl'>FAST LEARNER</h1>
            <h1 className='text-cyan-800 text-3xl'>TEAM WORK</h1>

          </div>

      </section>
      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center">Projects</h2>
        <p className="text-center text-gray-700 mb-12">
          I have worked on a variety of web development projects, ranging from responsive websites for small businesses to full-stack applications and complex front-end interfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1500">
          {[
            { name: "Salon Appointment Booking", link: "https://uc-5.onrender.com" },
            { name: "Employee Management System", link: "https://emsystem-i36t.onrender.com" },
            { name: "Frontend Gym Website", link: "#" },
            { name: "Portfolio Website", link: "#" }
          ].map(project => (
            <div key={project.name} className="p-6 border rounded-lg shadow hover:shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <a href={project.link} className="text-blue-600 hover:underline">View</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-cyan-400  mb-8 text-center">Contact Me</h2>
        <div className=" p-10 grid md:grid-cols-2 gap-60">
        <form className="space-y-4">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full border p-3 rounded bg-gray-200 text-gray-800 outline-none"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full border p-3 rounded bg-gray-200 text-gray-800 outline-none"
  />
  <textarea
    rows="10"
    placeholder="Message"
    className="w-full border p-3 rounded bg-gray-200 text-gray-800 outline-none"
  ></textarea>
  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Send
  </button>
</form>

          
          <div className="space-y-4">
              <div data-aos="zoom-in" data-aos-duration="1500" className="flex-1 ">
          <img src={contact} alt="About" className="w-64 rounded-xl shadow-lg" />
        </div>
            <div className="flex items-center gap-2 text-gray-700"><FaEnvelope /> yashbhatia81898@gmail.com</div>
            <div className="flex items-center gap-2 text-gray-700"><FaPhone /> 8198988762 <FaMapMarkerAlt /> Sirsa, Haryana</div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaLinkedin /> <a href="https://www.linkedin.com/in/yash-bhatia-34ba782ab/" className="hover:underline" target="_blank">LinkedIn</a>
        
              <FaGithub /> <a href="https://github.com/" className="hover:underline" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-end  text-gray-600">
        <div className="space-x-4 mr-10">
          {sections.map((section) => (
            <ScrollLink key={section} to={section} smooth duration={500} className="hover:text-blue-500 cursor-pointer capitalize">
              {section}
            </ScrollLink>
          ))}
        </div>
        <p className="mt-2 mr-9">© 2024 Portfolio | All Rights Reserved.</p>
      </footer>
    </div>

  )
}

export default App