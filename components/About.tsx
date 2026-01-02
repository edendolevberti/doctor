
import React from 'react';
import { Award, GraduationCap, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, title: 'מומחיות', detail: 'בוגר לימודי רפואה בהצטיינות' },
    { icon: <Users className="w-6 h-6" />, title: 'מטופלים', detail: 'אלפי זוגות מאושרים לאורך השנים' },
    { icon: <GraduationCap className="w-6 h-6" />, title: 'מחקר', detail: 'עשרות פרסומים בכתבי עת עולמיים' },
    { icon: <Heart className="w-6 h-6" />, title: 'יחס אישי', detail: 'ליווי אנושי ורגיש לאורך כל הדרך' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://media.easy.co.il/images/PICS/5027622.jpg" alt="Clinic 1" className="rounded-2xl shadow-lg mt-8" />
              <img src="https://www.sheba.co.il/webfiles/images/cache/186X228/aoeX1/webfiles/fck/image/headers/96fffc1af8d27ffea8bf5c049a081ed8.jpg" alt="Clinic 2" className="rounded-2xl shadow-lg" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-8 rounded-full shadow-2xl hidden lg:block">
              <span className="text-xl font-bold block text-center">YR</span>
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">הכירו את הפרופסור</h3>
              <h2 className="text-4xl font-black text-gray-900">פרופסור ירון רבינוביץ'</h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              פרופסור ירון רבינוביץ' הוא מומחה למיילדות, גינקולוגיה ופריון, המנהל את היחידה להפריה חוץ-גופית באחד המרכזים הרפואיים המובילים בישראל. עם ניסיון של עשורים ברפואת פריון, הוא נחשב לאחד מחלוצי התחום בארץ.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              האני מאמין של פרופסור רבינוביץ' משלב בין מקצועיות רפואית ללא פשרות לבין אנושיות, הכלה ורגישות גבוהה. הוא מאמין שכל מטופלת היא עולם ומלואו, ולכן כל תוכנית טיפול נבנית באופן אינדיבידואלי ומדויק.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{stat.title}</h4>
                    <p className="text-sm text-gray-500">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
