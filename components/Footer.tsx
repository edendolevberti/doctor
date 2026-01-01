
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#') return;
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const preventDefault = (e: React.MouseEvent) => e.preventDefault();

  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-1.5 rounded-lg shadow-md shadow-blue-100">
                <span className="text-white font-black text-sm px-1">YR</span>
              </div>
              <span className="font-black text-2xl text-gray-900 leading-tight">פרופסור ירון רבינוביץ'</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              מומחה מוביל בפריון, IVF וליווי הריון. עשרות שנות ניסיון במרכז הבמה של הרפואה בישראל, בליווי אלפי זוגות להורות מאושרת.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#!" 
                  onClick={preventDefault}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-black text-gray-900 text-lg">ניווט מהיר</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {[
                { n: 'אודות', h: '#about' },
                { n: 'שירותים', h: '#services' },
                { n: 'מידע IVF', h: '#ivf-info' },
                { n: 'סיפורי הצלחה', h: '#success-stories' },
                { n: 'שאלות ותשובות', h: '#faq' },
                { n: 'צרו קשר', h: '#contact' },
                { n: 'בלוג פריון', h: '#' },
              ].map((link) => (
                <a 
                  key={link.n} 
                  href={link.h} 
                  onClick={(e) => handleScroll(e, link.h)}
                  className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all text-sm font-medium"
                >
                  {link.n}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-black text-gray-900 text-lg">המרפאה שלנו</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin size={20} className="text-blue-600 shrink-0" />
                <span>מגדלי ויצמן 14, תל אביב<br/>קומה 12, אגף פריון</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Phone size={20} className="text-blue-600 shrink-0" />
                <span>03-123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Mail size={20} className="text-blue-600 shrink-0" />
                <span>office@prof-yaron.co.il</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-black text-gray-900 text-lg">מצוינות רפואית</h4>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-blue-900 font-bold text-sm mb-2">זמינות לייעוץ</p>
              <p className="text-blue-700 text-xs leading-relaxed mb-4">
                אנו עושים מאמץ לתת מענה לכל פנייה תוך 24 שעות עסקים.
              </p>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-blue-600 font-black text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                קביעת תור עכשיו
                <span>←</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} פרופסור ירון רבינוביץ' - כל הזכויות שמורות.</p>
          <div className="flex gap-6">
            <a href="#!" onClick={preventDefault} className="hover:text-blue-600">הצהרת נגישות</a>
            <a href="#!" onClick={preventDefault} className="hover:text-blue-600">מדיניות פרטיות</a>
            <a href="#!" onClick={preventDefault} className="hover:text-blue-600">תקנון האתר</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
