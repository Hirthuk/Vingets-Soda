import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-white px-8 py-12 relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Vingets Soda Company</h1>
            <p className="text-yellow-100 text-lg">Refreshing Sodas & Classic Flavors Since 1998</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Shop Info Section */}
        <div className="px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Shop Info */}
            <div>
              <h2 className="text-2xl font-semibold text-red-700 mb-6">Shop Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Shop Name</h3>
                  <p className="text-lg text-gray-800">Vingets Soda Company</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="text-lg text-gray-800">contact@vingetssoda.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="text-lg text-gray-800">
                    1/30, Vingets Soda Company, Big Street,<br />
                    Thirumayam, Pudukkottai, Tamil Nadu, 622507
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <p className="text-lg text-gray-800">+91 93450 67994</p>
                </div>
              </div>
            </div>

            {/* Right Column - Hours & Social */}
            <div>
              <h2 className="text-2xl font-semibold text-red-700 mb-6">Visit & Connect</h2>
              <div className="space-y-6">
                {/* Hours */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Working Hours</h3>
                  <div className="px-3 py-1 bg-yellow-100 text-red-700 rounded-full text-sm inline-block">
                    Monday - Saturday: 9:00 AM - 8:00 PM
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/vingetssoda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-yellow-500 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/vingetssoda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-yellow-500 transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://x.com/vingetssoda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-yellow-500 transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Shop */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-red-700 mb-6">About Vingets Soda Company</h2>
            <p className="text-gray-700 leading-relaxed">
              Vingets Soda Company is Pudukkottai’s favorite destination for refreshing sodas, classic flavors, and exclusive blends.
              Established in 1998, we pride ourselves on quality, taste, and fast delivery.
              Visit us at Thirumayam for a fizzy experience or order online for doorstep refreshment!
            </p>
            <a
              href="https://maps.app.goo.gl/vingetssoda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-red-500 hover:bg-yellow-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
