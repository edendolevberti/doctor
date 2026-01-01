
import React from 'react';
import { Quote, Heart } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      name: "מיכל ודוד, תל אביב",
      challenge: "חמש שנים של ניסיונות טבעיים וטיפולי הורמונים שלא צלחו. אבחנה של אי-פריון לא מוסבר.",
      treatment: "פרוטוקול IVF מותאם אישית בשילוב מיקרו-מניפולציה (ICSI) והחזרת עובר קפוא.",
      result: "הריון תקין מהסבב הראשון ולידה של בן בריא, היום בן שנתיים.",
      quote: "פרופסור רבינוביץ' נתן לנו תקווה כשהרגשנו אבודים. המקצועיות שלו היא ברמה אחרת, אבל האנושיות היא שעשתה את ההבדל."
    },
    {
      id: 2,
      name: "אפרת, ירושלים",
      challenge: "רזרבה שחלתית נמוכה וגיל מתקדם (41). רצון עז להפוך לאם יחידנית.",
      treatment: "שאיבות מרובות לשם צבירת ביציות, שימוש בטכנולוגיות מעבדה מתקדמות לבחירת זרע ועוברים.",
      result: "לאחר שלושה סבבים, הושג הריון. היום אמא לתינוקת מדהימה.",
      quote: "הוא לא ויתר עלי לרגע, גם כשהמספרים היו נגדנו. הוא בנה לי תוכנית קרב מדויקת והיום אני מחבקת את החלום שלי."
    },
    {
      id: 3,
      name: "ליטל ויוסי, חיפה",
      challenge: "הפלות חוזרות וחשש מבעיה גנטית בעוברים.",
      treatment: "טיפול IVF בשילוב בדיקה גנטית טרום-השרשתית (PGT-A) לאבחון עוברים תקינים כרומוזומלית.",
      result: "החזרה של עובר תקין שהובילה להריון יציב ולידת בת.",
      quote: "הדיוק והירידה לפרטים של פרופסור ירון הם שהביאו אותנו לקו הסיום בידיים מלאות. אין לנו מילים להודות לו."
    }
  ];

  return (
    <section id="success-stories" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">מרגש כל פעם מחדש</h3>
          <h2 className="text-4xl font-black text-gray-900 mt-2">סיפורי הצלחה</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-full">
                  <Heart size={24} fill="currentColor" className="opacity-20" />
                </div>
                <Quote size={40} className="text-blue-100" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{story.name}</h4>
                
                <div className="mb-4">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">האתגר:</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">הטיפול:</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.treatment}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">התוצאה:</p>
                  <p className="text-gray-900 font-medium text-sm">{story.result}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50 italic text-gray-700 text-sm leading-relaxed relative">
                "{story.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
