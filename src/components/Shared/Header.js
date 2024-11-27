import Image from "next/image";
import logo from '../../assets/Morfitter.png'

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-lg">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* <a className="logo text-transparent text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-400 via-purple-700 bg-clip-text" href="#">
          Morfitter
        </a> */}
        <Image src={logo} alt="logo" height={0} width={0} className=" w-32" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="nav-link text-lg font-light py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white transition-all">Home</a>
            </li>
            <li>
              <a href="#" className="nav-link text-lg font-light py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white transition-all">About Us</a>
            </li>
            <li>
              <a href="#" className="nav-link text-lg font-light py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white transition-all">For Personal Trainers</a>
            </li>
            <li>
              <a href="#" className="nav-link text-lg font-light py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white transition-all">For Fitness Enthusiasts</a>
            </li>
            <li>
              <a href="#" className="nav-link text-lg font-light py-2 px-4 rounded-lg hover:bg-pink-400 hover:text-white transition-all">Blogs</a>
            </li>
          </ul>

          <button className="contactBtn py-2 px-8 text-lg font-medium bg-purple-700 text-white rounded-full hover:bg-teal-500 transition-all">
            Contact Us
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Header;
