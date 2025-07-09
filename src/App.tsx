import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Dog, Camera, MapPin } from 'lucide-react';

// Main App Component - This is the root of our application.
// In TypeScript, we use React.FC (Functional Component) to type our component.
const App: React.FC = () => {
  // We use useState with a type annotation for our state variable.
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Helper function to render navigation links, makes the code cleaner.
  // No type changes needed here, as it's just returning JSX.
  const navLinks = (
    <>
      <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
      <a href="#gallery" className="text-gray-600 hover:text-indigo-600 transition-colors">Gallery</a>
      <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a>
      <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
    </>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Header & Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Pawsitive Place</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (collapsible) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg pb-4">
            <nav className="flex flex-col items-center space-y-4 pt-2">
              {navLinks}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {/* Section 1: Hero Section */}
        <section className="relative text-center py-20 md:py-32 px-6 bg-white">
            <div className="absolute inset-0 bg-indigo-100 opacity-30 transform -skew-y-3"></div>
            <div className="relative container mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Your Dog's Favorite <span className="text-indigo-600">Home Away From Home</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Professional daycare and creative photoshoots for your furry family members. We provide a safe, fun, and loving environment.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#services" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                        Our Services
                    </a>
                    <a href="#gallery" className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                        View Gallery
                    </a>
                </div>
            </div>
        </section>

        {/* Section 2: Services */}
        <section id="services" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Two amazing services, one passionate team.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 text-left">
              {/* Service 1: Dog Daycare */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Dog className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Dog Daycare</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  A full day of supervised play, socialization, and fun activities in our secure indoor and outdoor areas. We ensure every dog gets the attention and exercise they need.
                </p>
                <ul className="mt-6 space-y-2 text-gray-700">
                  <li className="flex items-center gap-3"><span className="text-indigo-500 font-bold">✓</span> Secure Play Areas</li>
                  <li className="flex items-center gap-3"><span className="text-indigo-500 font-bold">✓</span> Trained & Loving Staff</li>
                  <li className="flex items-center gap-3"><span className="text-indigo-500 font-bold">✓</span> Daily Photo Updates</li>
                </ul>
              </div>
              {/* Service 2: Pet Photoshoots */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Camera className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Pet Photoshoots</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Capture your pet's unique personality with a professional photoshoot. We create beautiful, lasting memories with creative themes and high-quality portraits.
                </p>
                 <ul className="mt-6 space-y-2 text-gray-700">
                  <li className="flex items-center gap-3"><span className="text-pink-500 font-bold">✓</span> Creative & Fun Themes</li>
                  <li className="flex items-center gap-3"><span className="text-pink-500 font-bold">✓</span> Professional Equipment</li>
                  <li className="flex items-center gap-3"><span className="text-pink-500 font-bold">✓</span> High-Resolution Digital Images</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Photo Gallery */}
        <section id="gallery" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Happy Paws Gallery</h2>
            <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
              A sneak peek at the fun and smiles from our daycare and photoshoots.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Placeholder Images */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/a5b4fc/ffffff?text=Happy+Dog+1" alt="Happy Dog 1" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/fbcfe8/ffffff?text=Happy+Dog+2" alt="Happy Dog 2" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/a5b4fc/ffffff?text=Happy+Dog+3" alt="Happy Dog 3" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/fbcfe8/ffffff?text=Happy+Dog+4" alt="Happy Dog 4" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
            </div>
             <div className="text-center mt-8">
                <a href="#" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                    See More Photos
                </a>
            </div>
          </div>
        </section>

        {/* Section 4: About Us */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/c7d2fe/3730a3?text=Your+Sister!" alt="Founder" className="rounded-xl shadow-2xl w-full"/>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Founded by a True Dog Lover</h2>
                <p className="mt-6 text-lg text-gray-600">
                    Hi, I'm [Sister's Name]! My lifelong passion for dogs inspired me to create Pawsitive Place. It's more than just a business; it's a community where every dog is treated like family. I combined my love for animal care with my creative eye for photography to offer a unique experience for pets and their owners.
                </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white">
        <div className="container mx-auto py-12 px-6 text-center">
            <h3 className="text-2xl font-bold">Ready to treat your pup?</h3>
            <p className="mt-4 text-gray-300">Contact us to book a spot or schedule a photoshoot!</p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-indigo-400"/>
                    <span>123 Doggo Lane, Budapest, Hungary</span>
                </div>
                <a href="mailto:contact@pawsitiveplace.com" className="hover:text-indigo-400 transition-colors">contact@pawsitiveplace.com</a>
                <a href="tel:+36123456789" className="hover:text-indigo-400 transition-colors">+36 12 345 6789</a>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-6">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Pawsitive Place. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

