
import React from 'react';
import { ArrowLeft, CheckCircle, Award, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-fadeIn">
            <div className="flex flex-col gap-1">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-2">מומחיות ללא פשרות</span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                פרופסור <span className="text-blue-600">ירון רבינוביץ'</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-slate-600 mt-2">
                מומחה פריון, IVF וליווי הריון אישי
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
              מנהל היחידה להפריה חוץ-גופית, מוביל את חזית המחקר והטיפול בפריון בישראל. 
              אנו משלבים טכנולוגיה פורצת דרך עם ליווי אנושי ורגיש, כדי להפוך את החלום שלכם למציאות חיה.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200/50"
              >
                קביעת תור לייעוץ
                <ArrowLeft size={22} />
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleScroll(e, 'about')}
                className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-2"
              >
                למידה על המרפאה
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-none">30+ שנות</p>
                  <p className="text-xs text-slate-500">ניסיון קליני</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-none">אלפי הצלחות</p>
                  <p className="text-xs text-slate-500">תינוקות שנולדו</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-none">מומחיות</p>
                  <p className="text-xs text-slate-500">IVF ופוריות</p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Image & Profile Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 max-w-sm mx-auto lg:max-w-none">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://boneiolam.co.il/wp-content/uploads/2018/04/%D7%A4%D7%A8%D7%95%D7%A4-%D7%99%D7%A8%D7%95%D7%9F-%D7%A8%D7%91%D7%99%D7%A0%D7%95%D7%91%D7%99%D7%A5.jpg" 
                alt="Professor Yaron Rabinowitz" 
                className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-10 pt-20">
                <p className="text-white/80 text-sm font-medium italic">
                  "השליחות שלי היא להעניק לכל זוג את הסיכוי הטוב ביותר להורות, בשילוב מדע מתקדם ואנושיות עמוקה."
                </p>
              </div>
            </div>
            
            {/* Experience Floating Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex flex-col items-center">
              <span className="text-4xl font-black text-blue-600">IVF</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">מרכז מצוינות</span>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        onClick={(e) => {
          const el = document.getElementById('about');
          if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">גללו למטה</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
