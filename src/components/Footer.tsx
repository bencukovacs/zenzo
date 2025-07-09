import { useLanguage } from '../LanguageProvider';
import { MapPin } from 'lucide-react';

export const Footer = () => {
    const { t } = useLanguage();
    return (
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
    );
};