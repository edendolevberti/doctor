
import React from 'react';
import { Baby, Microscope, HeartPulse, ShieldCheck, CalendarCheck, Sparkles } from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ivf',
    title: 'טיפולי IVF (הפריה חוץ-גופית)',
    description: 'ליווי אישי ומקצועי לאורך כל תהליך ההפריה, תוך שימוש בטכנולוגיות המתקדמות ביותר להגדלת סיכויי ההצלחה.',
    icon: 'Microscope'
  },
  {
    id: 'fertility',
    title: 'ייעוץ ובירור פריון',
    description: 'אבחון מקיף לזוגות ויחידות, בדיקות הורמונליות ומציאת הפתרון המדויק עבורכם.',
    icon: 'HeartPulse'
  },
  {
    id: 'preservation',
    title: 'שימור פריון והקפאת ביציות',
    description: 'תכנון העתיד שלך היום. שירותי הקפאת ביציות לנשים המעוניינות לדחות את גיל האמהות.',
    icon: 'ShieldCheck'
  },
  {
    id: 'pregnancy',
    title: 'ליווי הריון בסיכון גבוה',
    description: 'מעקב צמוד ומקצועי מרגע ההתעברות ועד ללידה, עם דגש על בריאות האם והעובר.',
    icon: 'Baby'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Microscope': return <Microscope className="w-8 h-8" />;
    case 'HeartPulse': return <HeartPulse className="w-8 h-8" />;
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
    case 'Baby': return <Baby className="w-8 h-8" />;
    case 'CalendarCheck': return <CalendarCheck className="w-8 h-8" />;
    case 'Sparkles': return <Sparkles className="w-8 h-8" />;
    default: return <Sparkles className="w-8 h-8" />;
  }
};
