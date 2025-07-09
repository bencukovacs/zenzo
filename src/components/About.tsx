import { useLanguage } from '../LanguageProvider';

export const About = () => {
    const { t } = useLanguage();
    return (
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
    );
};