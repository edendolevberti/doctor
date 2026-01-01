
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'דף הבית', href: '#hero', id: 'hero' },
    { name: 'אודות', href: '#about', id: 'about' },
    { name: 'שירותים', href: '#services', id: 'services' },
    { name: 'מידע IVF', href: '#ivf-info', id: 'ivf-info' },
    { name: 'הצלחות', href: '#success-stories', id: 'success-stories' },
    { name: 'שאלות', href: '#faq', id: 'faq' },
    { name: 'צרו קשר', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPos = window.scrollY + 150;
      let currentSection = 'hero';
      
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            currentSection = link.id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => smoothScroll(e, 'hero')}
          className="flex items-center gap-3"
        >
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
            <span className="text-white font-black text-xl">YR</span>
          </div>
          <div className={`flex flex-col ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            <span className="font-black text-xl leading-tight tracking-tight">פרופסור ירון רבינוביץ'</span>
            <span className="text-xs font-bold opacity-70 uppercase tracking-widest">מומחה פריון ו-IVF</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => smoothScroll(e, link.id)}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-blue-600 bg-blue-50' 
                  : isScrolled 
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-50' 
                    : 'text-gray-700 md:text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="h-6 w-px bg-gray-200 mx-2"></div>
          <a 
            href="#contact" 
            onClick={(e) => smoothScroll(e, 'contact')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-black hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 text-sm shadow-lg shadow-blue-200"
          >
            <Phone size={16} />
            <span>קביעת תור</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden p-2 text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} className={!isScrolled ? 'text-gray-900 md:text-white' : ''} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white fixed inset-0 z-[110] p-6 flex flex-col gap-6 animate-fadeIn">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <span className="text-white font-black text-xl">YR</span>
              </div>
              <span className="font-black text-xl text-gray-900">פרופסור ירון רבינוביץ'</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500"><X size={32} /></button>
          </div>
          
          <div className="flex flex-col gap-2 overflow-y-auto">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => smoothScroll(e, link.id)}
                className={`text-2xl font-black py-4 border-b border-gray-100 flex justify-between items-center ${
                  activeSection === link.id ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                {link.name}
                <span className="text-gray-300">←</span>
              </a>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col gap-4">
            <a 
              href="#contact" 
              onClick={(e) => smoothScroll(e, 'contact')}
              className="bg-blue-600 text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              קביעת תור עכשיו
            </a>
            <div className="flex justify-center gap-8 text-gray-400 py-4">
              <Phone size={24} />
              <MessageCircle size={24} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
