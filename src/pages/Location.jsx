import React, { useEffect, useState } from 'react';
import { FiHome, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const navigate = useNavigate();
  const [hideForMobileMenu, setHideForMobileMenu] = useState(false);

  useEffect(() => {
    const handler = (e) => setHideForMobileMenu(e.detail);
    window.addEventListener('mobileMenuToggle', handler);
    return () => window.removeEventListener('mobileMenuToggle', handler);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 via-yellow-50 to-white px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 text-center">
          Vingets Soda Company Location
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          1/30, Vingets Soda Company, Big Street,<br />
          Thirumayam, Pudukkottai, Tamil Nadu, 622507
        </p>
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-md border border-yellow-200 mb-4">
          <iframe
            title="Vingets Soda Company Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3926.1920190379665!2d78.750811!3d10.246091999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDE0JzQ1LjkiTiA3OMKwNDUnMDIuOSJF!5e0!3m2!1sen!2sin!4v1753007441213!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps/place/10%C2%B014'45.9%22N+78%C2%B045'02.9%22E/@10.246092,78.750811,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-red-500 hover:bg-yellow-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
};

export default Location;