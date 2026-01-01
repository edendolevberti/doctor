
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation of submission
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', email: '', message: '' });
      alert('תודה רבה! פנייתך התקבלה, נחזור אליך בהקדם.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full translate-y-1/2 -translate-x-1/3 opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">צרו קשר לתיאום תור</h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                המרפאה שלנו פועלת באווירה שקטה ופרטית. נשמח לעמוד לשירותך וללוות אותך בדרך להגשמת החלום.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: <MapPin className="text-blue-400" />, label: 'כתובת', val: 'מגדלי ויצמן 14, תל אביב (קומה 12)' },
                { icon: <Phone className="text-blue-400" />, label: 'טלפון', val: '03-123-4567' },
                { icon: <Mail className="text-blue-400" />, label: 'אימייל', val: 'office@prof-yaron.co.il' },
                { icon: <Clock className="text-blue-400" />, label: 'שעות פעילות', val: 'א\'-ה\', 09:00-18:00' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-blue-800/30 border border-blue-700/50">
                  <div className="p-2 bg-blue-700/50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-bold uppercase">{item.label}</p>
                    <p className="text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-gray-900">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-600">
              <Send size={24} />
              השאירו פרטים ונחזור אליכם
            </h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">שם מלא</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">טלפון</label>
                <input 
                  required
                  type="tel" 
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="050-0000000"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">כתובת אימייל</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">הודעה / נושא הפנייה</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder="ספרו לנו בקצרה איך נוכל לעזור..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  disabled={submitted}
                  className="w-full bg-blue-600 text-white font-black text-lg py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  {submitted ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      שולח פנייה...
                    </>
                  ) : 'שליחת פרטים וקביעת תור'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
