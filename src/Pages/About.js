import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-[#003366] text-white py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
            <p className="text-xl mb-8">
              Learn more about Saylani Welfare Trust and our mission to empower communities.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg mb-8">
              Saylani Welfare Trust is dedicated to helping underprivileged communities by providing essential services in
              healthcare, education, and humanitarian aid. Our aim is to uplift individuals and communities, giving them
              the opportunity to lead better lives.
            </p>
            <h3 className="text-2xl font-semibold mb-6">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Education</h4>
                <p className="text-gray-700">
                  We provide free educational resources and support to children and adults, helping them create better futures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Healthcare</h4>
                <p className="text-gray-700">
                  We offer medical care, health education, and support to marginalized communities to ensure better health outcomes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Humanitarian Aid</h4>
                <p className="text-gray-700">
                  We provide emergency relief and support to those affected by natural disasters and conflicts, ensuring they have access to basic needs like food and shelter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
