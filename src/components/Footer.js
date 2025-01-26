import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Saylani Welfare Trust. All rights reserved.</p>
        <p className="text-sm">Made with ❤️ for Hackathon</p>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/saylanitrust"
            className="text-white hover:text-yellow-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/saylanitrust"
            className="text-white hover:text-yellow-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/saylanitrust"
            className="text-white hover:text-yellow-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
