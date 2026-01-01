
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, MessageSquareText } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'שלום! אני העוזר החכם של פרופסור ירון רבינוביץ\'. כיצד אוכל לעזור לך היום בנושאי פריון, IVF או ליווי הריון?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-blue-600 text-white p-3 rounded-2xl w-fit">
              <MessageSquareText size={32} />
            </div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              יש לכם שאלות? <br />
              העוזר החכם שלנו כאן
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              קבלו תשובות מיידיות לשאלות נפוצות בנושא תהליכי IVF, הקפאת ביציות, בדיקות גנטיות וליווי הריון. 
            </p>
            <div className="bg-amber-50 border-r-4 border-amber-400 p-4 rounded-l-xl text-amber-800 text-sm">
              <p className="font-bold mb-1">לתשומת לבך:</p>
              העוזר מבוסס בינה מלאכותית ומספק מידע כללי בלבד. אין לראות בתשובותיו ייעוץ רפואי מחייב. להחלטות רפואיות יש להיוועץ ישירות עם פרופסור רבינוביץ'.
            </div>
          </div>

          <div className="lg:col-span-3 bg-gray-50 rounded-3xl shadow-inner border border-gray-200 flex flex-col h-[600px] overflow-hidden">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">ייעוץ פריון חכם (AI)</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-500">מחובר כעת</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scroll-smooth">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-3 max-w-[85%] ${msg.role === 'user' ? 'mr-auto flex-row-reverse' : 'ml-auto'}`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${msg.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-white border border-gray-200 text-gray-400'}`}>
                    {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 ml-auto">
                  <div className="p-2 rounded-lg shrink-0 bg-white border border-gray-200 text-gray-400">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span className="text-sm text-gray-500">חושב על תשובה...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="שאלו אותי על תהליך ה-IVF או הקפאת ביציות..."
                  className="bg-transparent border-none outline-none flex-1 px-3 py-2 text-gray-800"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} className="rotate-180" />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                מופעל על ידי Gemini AI - שירות אוטומטי למטרות מידע בלבד
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
