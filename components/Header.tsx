
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronLeft } from 'lucide-react';

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
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/30 backdrop-blur-sm py-6'
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
            <div className="flex flex-col text-gray-900">
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
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
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
            className="xl:hidden p-2 text-gray-900 focus:outline-none hover:bg-gray-100/50 rounded-lg transition-colors relative z-[120]"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[150] xl:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Drawer Menu */}
          <div className="absolute top-0 right-0 h-full w-[70%] max-w-sm bg-white shadow-2xl flex flex-col animate-slideInRight">
            {/* Header of Drawer */}
            <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-gray-50/50">
              <div className="bg-blue-600 p-1.5 rounded-lg shadow-md">
                <span className="text-white font-black text-lg">YR</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white text-gray-500 rounded-full shadow-sm border border-gray-100 hover:text-red-500 hover:bg-red-50 transition-colors"
                aria-label="סגור תפריט"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-4 px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.id)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl font-bold transition-all ${
                      activeSection === link.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    <ChevronLeft size={16} className={`transition-opacity ${activeSection === link.id ? 'opacity-100' : 'opacity-0'}`} />
                  </a>
                ))}
              </nav>
            </div>

            {/* Footer of Drawer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
              <a 
                href="#contact" 
                onClick={(e) => smoothScroll(e, 'contact')}
                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-black shadow-lg shadow-blue-100 flex items-center justify-center gap-2 mb-4 hover:bg-blue-700 transition-colors"
              >
                <Phone size={20} />
                קביעת תור
              </a>
              <div className="text-center">
                <p className="text-xs text-gray-400 font-medium">פרופסור ירון רבינוביץ'</p>
                <p className="text-[10px] text-gray-300">מומחה פריון ו-IVF</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
