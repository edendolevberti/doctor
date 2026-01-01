
import React from 'react';
import { Microscope, Activity, FlaskConical, Baby, Info, CheckCircle2 } from 'lucide-react';

const IvfInfo: React.FC = () => {
  const steps = [
    {
      title: "גירוי שחלתי",
      desc: "מתן הורמונים (בזריקות) לעידוד השחלות לייצר מספר זקיקים ובתוכם ביציות, במקום ביצית אחת כבמחזור טבעי.",
      icon: <Activity size={24} />
    },
    {
      title: "שאיבת ביציות",
      desc: "פעולה פשוטה תחת הרדמה קלה, בה נשאבות הביציות מהזקיקים בעזרת מחט עדינה המונחית על ידי אולטרסאונד.",
      icon: <Microscope size={24} />
    },
    {
      title: "הפריה במעבדה",
      desc: "הפגשת הביציות עם תאי הזרע במעבדה. לעיתים נעזרים בשיטת ה-ICSI בה מוזרק תא זרע בודד לתוך הביצית.",
      icon: <FlaskConical size={24} />
    },
    {
      title: "החזרת עוברים",
      desc: "לאחר מספר ימי דגירה, העובר (או העוברים) המובחר מוחזר לרחם בתהליך פשוט הדומה לבדיקה גינקולוגית רגילה.",
      icon: <Baby size={24} />
    }
  ];

  return (
    <section id="ivf-info" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6">
              <Info size={14} />
              מדריך מקצועי
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">מהו תהליך ה-IVF <br/><span className="text-blue-600">שלב אחר שלב</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              הפריה חוץ-גופית (IVF) היא אחת הטכנולוגיות המתקדמות והמוצלחות ביותר בתחום הפוריות. התהליך מאפשר לעקוף מכשולים רבים בדרך להריון, כמו חסימות בחצוצרות, בעיות זרע או רזרבה נמוכה.
            </p>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-xl border-b pb-2">גורמים המשפיעים על הצלחה:</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "גיל המטופלת (הגורם המשמעותי ביותר)",
                  "איכות הביציות והזרע",
                  "תקינות רירית הרחם",
                  "היסטוריה רפואית קודמת",
                  "אורח חיים (משקל, עישון)",
                  "מומחיות הרופא והמעבדה"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
              <h4 className="font-bold text-red-600 flex items-center gap-2 mb-2">
                סיכונים אפשריים:
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                למרות שמדובר בתהליך בטוח מאוד, קיימים סיכונים כמו גירוי יתר שחלתי (OHSS) או הריונות מרובי עוברים. פרופסור רבינוביץ' מקפיד על פרוטוקולים הממזערים סיכונים אלו למינימום.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:border-blue-300 transition-colors">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 font-black opacity-30 text-xl italic">0{i+1}</span>
                    <h4 className="font-bold text-gray-900 text-xl">{step.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IvfInfo;
