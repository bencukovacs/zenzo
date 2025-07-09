import { useLanguage } from '../LanguageProvider';

export const Hero = () => {
  const { t } = useLanguage();

  return (
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
  );
};