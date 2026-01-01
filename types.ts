
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
