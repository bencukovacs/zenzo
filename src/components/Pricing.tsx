import { useLanguage } from '../LanguageProvider';
import { Star } from 'lucide-react';

export const Pricing = () => {
    const { t } = useLanguage();
    return (
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
    );
};