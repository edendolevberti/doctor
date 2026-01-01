
import React from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[90] flex flex-col gap-3">
      {showTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white text-gray-500 p-3 rounded-full shadow-lg border border-gray-100 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-90"
          aria-label="חזרה למעלה"
        >
          <ChevronUp size={24} />
        </button>
      )}
      <a 
        href="https://wa.me/97231234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center group"
      >
        <MessageCircle size={30} fill="currentColor" className="opacity-20 absolute scale-150 group-hover:scale-[2] transition-transform" />
        <MessageCircle size={30} className="relative z-10" />
      </a>
      <a 
        href="tel:03-123-4567" 
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all flex items-center justify-center group"
      >
        <Phone size={30} fill="currentColor" className="opacity-20 absolute scale-150 group-hover:scale-[2] transition-transform" />
        <Phone size={30} className="relative z-10" />
      </a>
    </div>
  );
};

export default FloatingActions;
