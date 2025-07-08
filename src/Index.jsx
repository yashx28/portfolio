import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ once: true, duration: 1000 });

const Index = () => {
  return (
    <div className="font-sans text-white bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">POWER HOUSE GYM</h1>
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h2 className="text-5xl font-bold mb-4">LET'S GET MOVING</h2>
        <p className="text-lg mb-8 max-w-xl">
          Your journey to fitness starts here. Unleash your potential.
        </p>
        <div className="space-x-4">
          <ScrollLink to="contact" smooth duration={500} className="btn">
            Start Your Journey
          </ScrollLink>
          <ScrollLink to="plans" smooth duration={500} className="btn-outline">
            Discover Your Plan
          </ScrollLink>
        </div>
      </section>

      {/* Workout Session */}
      <section id="workout" className="py-20 px-6 md:px-20">
        <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Workout Sessions</h2>
          <p className="text-gray-300">
            Join our expert-led workout sessions tailored for strength, endurance, and flexibility. Suitable for all fitness levels!
          </p>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 px-6 md:px-20 bg-gray-800">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">Our Plans</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {[
            { title: '6-Month Plan', duration: '6 months', price: '₹9,999' },
            { title: '1-Year Plan',  duration: '12 months', price: '₹17,999' }
          ].map((plan, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex-1 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="mb-2">{plan.duration}</p>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ScrollLink
                to="contact"
                smooth duration={500}
                className="mt-auto inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Join Now
              </ScrollLink>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 md:px-20">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace src with your images */}
          {['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg'].map((src, idx) => (
            <img
              key={idx}
              data-aos="fade-up"
              src={`/gallery/${src}`}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-800">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
          <form data-aos="fade-right" className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-700 rounded outline-none"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 rounded outline-none"/>
            <textarea rows="5" placeholder="Message" className="w-full p-3 bg-gray-700 rounded outline-none"></textarea>
            <button className="bg-blue-600 w-full py-2 rounded hover:bg-blue-700 transition">
              Send
            </button>
          </form>
          <div data-aos="fade-left" className="space-y-4 text-gray-300 flex flex-col justify-center">
            <div className="flex items-center gap-2"><FaEnvelope /> yashbhatia81898@gmail.com</div>
            <div className="flex items-center gap-2"><FaPhone /> 8198988762</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt /> Sirsa, Haryana</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black bg-opacity-60">
        <ScrollLink to="home" smooth duration={500} className="mx-2 hover:text-blue-400 cursor-pointer">Home</ScrollLink>
        <ScrollLink to="workout" smooth duration={500} className="mx-2 hover:text-blue-400 cursor-pointer">Workout</ScrollLink>
        <ScrollLink to="plans" smooth duration={500} className="mx-2 hover:text-blue-400 cursor-pointer">Plans</ScrollLink>
        <ScrollLink to="gallery" smooth duration={500} className="mx-2 hover:text-blue-400 cursor-pointer">Gallery</ScrollLink>
        <ScrollLink to="contact" smooth duration={500} className="mx-2 hover:text-blue-400 cursor-pointer">Contact</ScrollLink>
        <p className="mt-4">© 2024 GYM | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
