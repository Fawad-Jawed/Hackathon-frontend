import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-[#003366] text-white py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              Welcome to <span className="text-yellow-500">Saylani Welfare Trust</span>
            </h1>
            <p className="text-xl mb-8">
              Empowering communities, improving lives, and making a difference through education, healthcare, and humanitarian efforts.
            </p>
            <a
              href="/about"
              className="bg-yellow-500 text-black py-3 px-8 rounded-full text-xl hover:bg-yellow-400 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <p className="text-gray-700 mb-4">
                  We provide quality education to underprivileged children, enabling them to build a brighter future.
                </p>
                <a href="/services#education" className="text-yellow-500 hover:text-yellow-400 transition duration-300">
                  Learn More
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Healthcare</h3>
                <p className="text-gray-700 mb-4">
                  Our healthcare initiatives provide essential medical services to those in need, ensuring better health for all.
                </p>
                <a href="/services#healthcare" className="text-yellow-500 hover:text-yellow-400 transition duration-300">
                  Learn More
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Humanitarian Aid</h3>
                <p className="text-gray-700 mb-4">
                  We deliver humanitarian aid to disaster-stricken regions, providing food, shelter, and medical care.
                </p>
                <a href="/services#humanitarian" className="text-yellow-500 hover:text-yellow-400 transition duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-8">
              Saylani Welfare Trust is committed to the welfare of humanity. We focus on education, healthcare, and humanitarian
              services to uplift and empower communities.
            </p>
            <a
              href="/about"
              className="bg-yellow-500 text-black py-3 px-8 rounded-full text-xl hover:bg-yellow-400 transition duration-300"
            >
              Discover Our Story
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
