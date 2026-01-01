
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "מהי זכאות לטיפולי פוריות בסבסוד קופת חולים?",
      a: "בישראל, סל הבריאות מכסה טיפולי פוריות לילד ראשון ושני עבור נשים עד גיל 45. עם זאת, קיימים הבדלים בין הקופות השונות (ביטוחים משלימים) לגבי מספר הסבבים והשתתפויות עצמיות."
    },
    {
      q: "מהם סיכויי ההצלחה בטיפול IVF?",
      a: "סיכויי ההצלחה תלויים במידה רבה בגיל האישה ובגורמי הפריון של בני הזוג. בממוצע, בגילאי 35 ומטה הסיכויים עומדים על כ-30-40% לסבב, והם יורדים עם העלייה בגיל."
    },
    {
      q: "כמה זמן נמשך תהליך IVF ממוצע?",
      a: "סבב טיפול מלא נמשך בדרך כלל בין שבועיים לארבעה שבועות, מתחילת נטילת ההורמונים ועד להחזרת העוברים ובדיקת ההריון."
    },
    {
      q: "האם טיפולי פוריות כרוכים בכאב?",
      a: "רוב שלבי הטיפול אינם כואבים באופן משמעותי. הזריקות ההורמונליות נעשות במחטים דקות מאוד. שאיבת הביציות מתבצעת תחת הרדמה קלה כך שאין תחושת כאב כלל."
    },
    {
      q: "עד איזה גיל ניתן לבצע טיפולי IVF?",
      a: "בישראל החוק מאפשר טיפולי IVF עד גיל 45 עם ביציות האישה, ועד גיל 54 במידה ונעזרים בתרומת ביצית."
    },
    {
      q: "מה העלות של ייעוץ פרטי וטיפול?",
      a: "העלויות משתנות בהתאם לסוג הטיפול ולכיסוי הביטוחי (שב\"ן או ביטוח פרטי). אנו מספקים פירוט מלא של העלויות לאחר פגישת הייעוץ הראשונית."
    },
    {
      q: "כיצד עלי להתכונן להריון לפני תחילת טיפולים?",
      a: "מומלץ להתחיל בנטילת חומצה פולית, לשמור על תזונה מאוזנת, להפסיק עישון וצריכת אלכוהול מופרזת, ולבצע בדיקות דם וגנטיקה ראשוניות."
    },
    {
      q: "האם יש הגבלה על מספר העוברים המוחזרים?",
      a: "כן, המדיניות המודרנית (במיוחד בנשים צעירות) היא החזרת עובר אחד (SET) כדי למנוע הריונות מרובי עוברים הכרוכים בסיכון גבוה. ההחלטה מתקבלת באופן פרטני."
    },
    {
      q: "מה ההבדל בין עובר 'טרי' לעובר 'קפוא'?",
      a: "עובר טרי מוחזר באותו סבב של שאיבת הביציות. עובר קפוא נשמר במעבדה ומוחזר בסבב עתידי. כיום, אחוזי ההצלחה של עוברים קפואים משתווים לאלו של טריים הודות לטכנולוגיית הקפאה מהירה (ויטריפיקציה)."
    },
    {
      q: "האם פרופסור רבינוביץ' מבצע גם מעקב הריון?",
      a: "בהחלט. פרופסור רבינוביץ' מלווה נשים רבות מרגע הכניסה להריון ועד ללידה, כולל בדיקות אולטרסאונד שגרתיות ומעקב הריון בסיכון גבוה."
    }
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-50 text-blue-600 rounded-2xl mb-4">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl font-black text-gray-900">שאלות נפוצות</h2>
          <p className="text-gray-600 mt-4 text-lg">כל מה שרצית לדעת על הדרך להריון המיוחל</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md">
              <button 
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 text-right bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 bg-blue-50/30 text-gray-700 leading-relaxed border-t border-gray-100 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
