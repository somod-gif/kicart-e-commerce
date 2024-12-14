const Home = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to KitCart, Your Ultimate Shopping Destination
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Discover the best products at unbeatable prices, and enjoy fast, reliable shipping with every order.
          </p>
          <a
            href="#shop"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">




            {/* Product Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name 1</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product. High quality and durability are guaranteed.
              </p>
              <p className="text-xl font-bold text-gray-800">$99.99</p>

              {/* Add margin-top to the button */}
              <a
                href="#"
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Add to Cart
              </a>
            </div>
            {/* Product Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name 1</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product. High quality and durability are guaranteed.
              </p>
              <p className="text-xl font-bold text-gray-800">$99.99</p>

              {/* Add margin-top to the button */}
              <a
                href="#"
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Add to Cart
              </a>
            </div>
            {/* Product Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name 1</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product. High quality and durability are guaranteed.
              </p>
              <p className="text-xl font-bold text-gray-800">$99.99</p>

              {/* Add margin-top to the button */}
              <a
                href="#"
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Add to Cart
              </a>
            </div>
            {/* Product Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name 1</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product. High quality and durability are guaranteed.
              </p>
              <p className="text-xl font-bold text-gray-800">$99.99</p>

              {/* Add margin-top to the button */}
              <a
                href="#"
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Add to Cart
              </a>
            </div>
            
            {/* Product Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name 1</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product. High quality and durability are guaranteed.
              </p>
              <p className="text-xl font-bold text-gray-800">$99.99</p>

              {/* Add margin-top to the button */}
              <a
                href="#"
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Add to Cart
              </a>
            </div>
            {/* Product Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name 1</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product. High quality and durability are guaranteed.
              </p>
              <p className="text-xl font-bold text-gray-800">$99.99</p>

              {/* Add margin-top to the button */}
              <a
                href="#"
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Add to Cart
              </a>
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Join KitCart Today!</h2>
          <p className="text-xl sm:text-2xl mb-8">
            Sign up and be part of the shopping revolution. Thousands of customers trust KitCart for all their needs.
          </p>
          <a
            href="#signup"
            className=" bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
