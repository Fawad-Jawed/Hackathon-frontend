import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-[#003366] text-white py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl mb-8">
              Empowering lives through compassionate services. At Saylani Welfare Trust, we strive to provide support to
              those in need, creating a brighter future for all.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Key Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1: Education */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#003366] mb-4">Education for All</h3>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that education is the key to a brighter future. Saylani Welfare Trust offers free educational
                  resources, scholarships, and vocational training to empower individuals with the skills they need to succeed.
                  From school supplies to scholarships for higher education, we support every step of the educational journey.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>

              {/* Service 2: Healthcare */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#003366] mb-4">Healthcare Services</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Health is wealth. Saylani’s healthcare services include free medical check-ups, treatments, and medications
                  for the underprivileged. Our mobile clinics provide healthcare in remote areas, and our partnerships with top
                  hospitals ensure that no one is left behind.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>

              {/* Service 3: Humanitarian Aid */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#003366] mb-4">Humanitarian Aid</h3>
                <p className="text-lg text-gray-700 mb-6">
                  In times of crisis, we stand together. Saylani provides humanitarian aid in the form of food, clothing, and
                  shelter to individuals affected by natural disasters, conflicts, and other emergencies. We ensure that every
                  person receives the support they need to rebuild their lives.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>

              {/* Service 4: Food and Nutrition */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#003366] mb-4">Food & Nutrition</h3>
                <p className="text-lg text-gray-700 mb-6">
                  No one should go hungry. Our food distribution programs provide nutritious meals to families in need,
                  especially during Ramadan, Eid, and other religious festivals. We also offer nutritional support to children
                  and the elderly to improve their health and well-being.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>

              {/* Service 5: Women Empowerment */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#003366] mb-4">Women Empowerment</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Empowering women is essential to building strong communities. We provide women with access to vocational
                  training, skill-building workshops, and financial assistance programs to help them become independent and
                  contribute to society’s growth.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>

              {/* Service 6: Skill Development */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-[#003366] mb-4">Skill Development</h3>
                <p className="text-lg text-gray-700 mb-6">
                  We offer training programs for youth and adults to develop skills in various fields like technology, carpentry,
                  sewing, and more. These programs open up employment opportunities and enhance the livelihood of individuals
                  in underserved communities.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#003366] text-white py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8">
              At Saylani Welfare Trust, we believe that together we can change lives. Become a part of our community and
              contribute to the upliftment of society. Whether you donate your time, skills, or resources, every little bit
              helps us build a better world for those in need.
            </p>
            <a
              href="/contact"
              className="bg-yellow-500 text-black py-3 px-8 rounded-full text-xl hover:bg-yellow-400 transition duration-300"
            >
              Get Involved
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
