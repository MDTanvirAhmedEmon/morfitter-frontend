const Footer = () => {
    return (
      <footer className="footer-section bg-[#2d2d2d] text-white">
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            {/* First Column */}
            <div>
              <div className="logo">
                <a
                  href="#"
                  className="text-[57.25px] font-extrabold leading-[55.46px] tracking-[-0.02em]"
                >
                  Morfitter
                </a>
              </div>
              <p className="mt-4 text-[15px] leading-[25.3px] max-w-[330px]">
                Welcome to Morfitter.com – your fitness journey starts here!
                Achieve your goals with expert trainers and personalized plans,
                anytime, anywhere.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="item h-10 w-10 rounded-full bg-white text-green-500 flex items-center justify-center text-xl hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="#"
                  className="item h-10 w-10 rounded-full bg-white text-green-500 flex items-center justify-center text-xl hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="#"
                  className="item h-10 w-10 rounded-full bg-white text-green-500 flex items-center justify-center text-xl hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="#"
                  className="item h-10 w-10 rounded-full bg-white text-green-500 flex items-center justify-center text-xl hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
  
            {/* Second Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    For Personal Trainers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    For Fitness Enthusiasts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Third Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Help</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    Trust and Safety
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-[18px] hover:text-orange-500 transition duration-300"
                  >
                    Privacy Settings
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Fourth Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe to our Newsletter</h3>
              <p className="text-[15px] leading-[25.3px] mb-4">
                Uses the most advanced AI Powered Grading Gym Track.
              </p>
              <div className="flex items-center bg-white rounded-full h-[55px] overflow-hidden px-3 gap-3">
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="flex-1 text-sm text-gray-700 outline-none border-none placeholder:text-gray-500"
                />
                <button className="px-6 py-2 rounded-full text-white bg-purple-600 hover:bg-green-500 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
  
        <div className="mt-8 border-t border-gray-700 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p className="text-sm">© 2024 All rights reserved!</p>
            <div className="space-x-6">
              <a href="#" className="text-white text-sm hover:text-orange-500">
                Privacy Policy
              </a>
              <a href="#" className="text-white text-sm hover:text-orange-500">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  