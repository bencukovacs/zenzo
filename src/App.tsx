import React, { useState } from 'react';
import { Menu, X, Dog, Camera, MapPin, Star } from 'lucide-react';
import { translations } from './translations'; // We import our text from the new file

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'hu' | 'en'>('hu');

  // We get the correct text based on the selected language.
  const t = translations[language];

  const navLinks = (
    <>
      <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navServices}</a>
      <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navPricing}</a>
      <a href="#gallery" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navGallery}</a>
      <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navAbout}</a>
      <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navContact}</a>
    </>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Pawsitive Place</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks}
          </nav>

          <div className="hidden md:flex items-center space-x-2 border-l border-gray-200 ml-6 pl-6">
            <button onClick={() => setLanguage('hu')} className={`font-semibold text-sm py-1 px-2 rounded ${language === 'hu' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>HU</button>
            <button onClick={() => setLanguage('en')} className={`font-semibold text-sm py-1 px-2 rounded ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>EN</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg pb-4">
            <nav className="flex flex-col items-center space-y-4 pt-2">
              {navLinks}
            </nav>
            <div className="flex justify-center items-center space-x-2 border-t border-gray-200 mt-4 pt-4">
              <button onClick={() => setLanguage('hu')} className={`font-semibold text-sm py-1 px-2 rounded ${language === 'hu' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>HU</button>
              <button onClick={() => setLanguage('en')} className={`font-semibold text-sm py-1 px-2 rounded ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>EN</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative text-center py-20 md:py-32 px-6 bg-white">
            <div className="absolute inset-0 bg-indigo-100 opacity-30 transform -skew-y-3"></div>
            <div className="relative container mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    {t.heroTitle}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t.heroSubtitle}
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#services" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                        {t.heroBtnServices}
                    </a>
                    <a href="#gallery" className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                        {t.heroBtnGallery}
                    </a>
                </div>
            </div>
        </section>

        <section id="services" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.servicesTitle}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.servicesSubtitle}</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 text-left">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full"> <Dog className="h-8 w-8 text-indigo-600" /> </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t.daycareTitle}</h3>
                </div>
                <p className="mt-4 text-gray-600">{t.daycareDesc}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full"> <Camera className="h-8 w-8 text-pink-600" /> </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t.photoshootTitle}</h3>
                </div>
                <p className="mt-4 text-gray-600">{t.photoshootDesc}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="pricing" className="py-20 px-6 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.pricingTitle}</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.pricingSubtitle}</p>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800">{t.tier1Title}</h3>
                        <p className="mt-4 text-5xl font-extrabold text-gray-900">{t.tier1Price}</p>
                        <p className="text-gray-500">{t.tier1Per}</p>
                        <ul className="mt-6 space-y-3 text-gray-600 text-left flex-grow">
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-indigo-500"/>{t.tier1Feat1}</li>
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-indigo-500"/>{t.tier1Feat2}</li>
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-indigo-500"/>{t.tier1Feat3}</li>
                        </ul>
                        <a href="#contact" className="mt-8 bg-indigo-100 text-indigo-700 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-200 transition-colors">{t.tier1Btn}</a>
                    </div>

                    <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-2xl flex flex-col ring-4 ring-indigo-300 relative">
                        <p className="absolute top-0 -translate-y-1/2 bg-pink-500 text-white font-semibold px-4 py-1 rounded-full">{t.popular}</p>
                        <h3 className="text-2xl font-bold">{t.tier2Title}</h3>
                        <p className="mt-4 text-5xl font-extrabold">{t.tier2Price}</p>
                        <p className="text-indigo-200">{t.tier2Per}</p>
                        <ul className="mt-6 space-y-3 text-indigo-100 text-left flex-grow">
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-pink-400"/>{t.tier2Feat1}</li>
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-pink-400"/>{t.tier2Feat2}</li>
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-pink-400"/>{t.tier2Feat3}</li>
                        </ul>
                        <a href="#contact" className="mt-8 bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">{t.tier2Btn}</a>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800">{t.tier3Title}</h3>
                        <p className="mt-4 text-5xl font-extrabold text-gray-900">{t.tier3Price}</p>
                        <p className="text-gray-500">{t.tier3Per}</p>
                        <ul className="mt-6 space-y-3 text-gray-600 text-left flex-grow">
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-indigo-500"/>{t.tier3Feat1}</li>
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-indigo-500"/>{t.tier3Feat2}</li>
                            <li className="flex items-center gap-3"><Star className="h-5 w-5 text-indigo-500"/>{t.tier3Feat3}</li>
                        </ul>
                        <a href="#contact" className="mt-8 bg-indigo-100 text-indigo-700 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-200 transition-colors">{t.tier3Btn}</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="gallery" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">{t.galleryTitle}</h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/a5b4fc/ffffff?text=Happy+Dog+1" alt="Happy Dog 1" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/fbcfe8/ffffff?text=Happy+Dog+2" alt="Happy Dog 2" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/a5b4fc/ffffff?text=Happy+Dog+3" alt="Happy Dog 3" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1"><img src="https://placehold.co/400x400/fbcfe8/ffffff?text=Happy+Dog+4" alt="Happy Dog 4" className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/c7d2fe/3730a3?text=Your+Sister!" alt="Founder" className="rounded-xl shadow-2xl w-full"/>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.aboutTitle}</h2>
                <p className="mt-6 text-lg text-gray-600">{t.aboutDesc}</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-800 text-white">
        <div className="container mx-auto py-12 px-6 text-center">
            <h3 className="text-2xl font-bold">{t.footerTitle}</h3>
            <p className="mt-4 text-gray-300">{t.footerContact}</p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center gap-3"> <MapPin className="h-6 w-6 text-indigo-400"/> <span>123 Doggo Lane, Budapest, Hungary</span> </div>
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
