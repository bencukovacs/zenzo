import { useLanguage } from '../LanguageProvider';

export const Gallery = () => {
    const { t } = useLanguage();
    return (
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
    );
};