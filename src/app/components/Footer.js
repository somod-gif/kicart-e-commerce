import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="text-3xl font-extrabold text-white mb-4">KitCart</div>
            <p className="text-gray-400">
              Discover the best products at the best prices. Join us to shop, save, and share.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-white transition duration-200">Home</a></li>
              <li><a href="/shop" className="hover:text-white transition duration-200">Shop</a></li>
              <li><a href="/cart" className="hover:text-white transition duration-200">Cart</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-200">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-200">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-200">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MyShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
