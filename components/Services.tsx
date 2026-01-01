
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">מה אנחנו מציעים</h3>
          <h2 className="text-4xl font-black text-gray-900">שירותי המרפאה</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          <p className="max-w-2xl text-gray-600 mt-4 text-lg">
            מגוון רחב של טיפולים מתקדמים המותאמים אישית לצרכים שלך, תוך שימוש בטכנולוגיות החדשניות ביותר בעולם הפריון.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-blue-50 text-blue-600 p-4 rounded-xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                למידע נוסף
                <span className="text-lg">←</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
