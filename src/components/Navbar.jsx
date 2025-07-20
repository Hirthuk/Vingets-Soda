import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assest';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { to: '/collection', label: 'Products', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { to: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { to: '/location', label: 'Location', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  const handleMobileMenu = (open) => {
    setMobileMenuOpen(open);
    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: open }));
  };

  return (
    <>
      <header className='flex flex-row items-center justify-between px-4 md:px-6 pt-3 pb-2 border-b border-gray-200 relative bg-white shadow-sm rounded-xl m-2'>
        {/* Company Logo - Left Side */}
        <div className='flex items-center'>
          <NavLink to="/">
            <div className='w-16 h-16 md:w-20 md:h-20 cursor-pointer transition-all duration-200 hover:scale-105 flex items-center justify-center rounded-xl'>
              <img 
                src={assets.Logo} 
                alt="KBN Bikes - Premium Bike Spare Parts in Madurai"
                className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
                loading="lazy"
                width="64"
                height="64"
              />
            </div>
          </NavLink>
        </div>

        {/* Desktop Navigation Links - Larger and Bolder */}
        <nav className='hidden lg:flex flex-row items-center gap-4 mx-4 flex-1 justify-center'>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-lg font-bold cursor-pointer hover:bg-blue-50 px-5 py-3 rounded-lg transition-all duration-200 ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-800'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
              aria-label={link.label}  // Accessibility
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side icons */}
        <div className='flex items-center gap-4 z-20'>
          {/* Location Icon - Direct link to Madurai Google Maps */}
          <a 
            href="https://www.google.com/maps/place/10%C2%B014'45.9%22N+78%C2%B045'02.9%22E/@10.246092,78.750811,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.246092!4d78.750811?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer nofollow"  // SEO: Prevent link juice loss
            className="p-2 hover:bg-blue-50 rounded-full transition-all"
            aria-label="Our location in Madurai"  // Accessibility
          >
            <img 
              src={assets.location_icon} 
              alt=""  // Decorative icon
              className="h-7 w-7"
              width="28"  // SEO: Explicit dimensions
              height="28"
              loading="lazy"
            />
          </a>

          {/* Call Icon */}
          <a 
            href="tel:+919943011309" 
            className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-full transition-all"
            aria-label="Call us"  // Accessibility
          >
            <img 
              src={assets.call_icon} 
              alt=""  // Decorative icon
              className="h-7 w-7"
              width="28"
              height="28"
              loading="lazy"
            />
            <span className="hidden md:inline font-medium">Call</span>
          </a>
          
          {/* Hamburger Menu */}
          <button
            className="lg:hidden flex flex-col justify-center items-center p-2 rounded-full hover:bg-blue-50"
            onClick={() => handleMobileMenu(!mobileMenuOpen)}
            aria-label="Toggle menu"  // Accessibility
            aria-expanded={mobileMenuOpen}  // Accessibility
          >
            <span className={`block w-6 h-[2px] bg-blue-600 mb-1.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-blue-600 mb-1.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col pt-20 pb-6">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
              onClick={() => handleMobileMenu(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Company Logo in Menu */}
            <div className="flex justify-center mb-8">
              <img 
                src={assets.Logo} 
                alt="KBN Bikes Logo" 
                className="h-24 object-contain"
                loading="eager"
                width="96"
                height="96"
              />
            </div>
            
            {/* Menu items */}
            <nav className="flex flex-col space-y-4 px-6">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-lg font-medium py-3 px-4 rounded-lg transition-colors flex items-center gap-4 ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={link.label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            
            {/* WhatsApp Button - Bottom */}
            <div className="mt-auto px-6 pt-6">
              <a 
                href="https://wa.me/9943011309" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center gap-3 bg-green-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <img 
                  src={assets.whatsapp_icon} 
                  alt=""
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  loading="lazy"
                />
                <span>Chat with us</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default NavBar;