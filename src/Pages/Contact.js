import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-[#003366] text-white py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl mb-4">
              Have any questions or need assistance? Feel free to reach out to us!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <form
              action="mailto:info@saylani.org" // Replace with the email address to receive form submissions
              method="post"
              enctype="text/plain"
              className="max-w-lg mx-auto space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-black py-3 px-8 rounded-full text-xl hover:bg-yellow-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Contact Information</h2>
            <p className="text-xl mb-6">You can reach us through the following methods:</p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Phone:</strong> +123-456-7890
              </p>
              <p className="text-lg">
                <strong>Email:</strong> info@saylani.org
              </p>
              <p className="text-lg">
                <strong>Address:</strong> 123 Saylani Street, Karachi, Pakistan
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
