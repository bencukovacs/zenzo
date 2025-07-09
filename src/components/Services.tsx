import { useLanguage } from '../LanguageProvider';
import { Dog, Camera } from 'lucide-react';

export const Services = () => {
    const { t } = useLanguage();
    return (
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
    );
};