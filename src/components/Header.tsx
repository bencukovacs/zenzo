import { useState } from 'react';
import { Menu, X, Dog } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = (
    <>
      <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navServices}</a>
      <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navPricing}</a>
      <a href="#gallery" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navGallery}</a>
      <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navAbout}</a>
      <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.navContact}</a>
    </>
  );

  // Define classes for clarity
  const commonButtonClasses = "font-semibold text-sm py-1 px-2 rounded border transition-colors";
  const selectedClasses = "bg-gray-200 text-indigo-600 border-gray-300";
  const notSelectedClasses = "bg-white text-gray-700 border-gray-200 hover:bg-gray-100";


  return (
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
          <button onClick={() => setLanguage('hu')} className={`${commonButtonClasses} ${language === 'hu' ? selectedClasses : notSelectedClasses}`}>HU</button>
          <button onClick={() => setLanguage('en')} className={`${commonButtonClasses} ${language === 'en' ? selectedClasses : notSelectedClasses}`}>EN</button>
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
            <button onClick={() => setLanguage('hu')} className={`${commonButtonClasses} ${language === 'hu' ? selectedClasses : notSelectedClasses}`}>HU</button>
            <button onClick={() => setLanguage('en')} className={`${commonButtonClasses} ${language === 'en' ? selectedClasses : notSelectedClasses}`}>EN</button>
          </div>
        </div>
      )}
    </header>
  );
};
