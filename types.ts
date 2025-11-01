
export type Language = 'en' | 'kn';

export interface TempleInfo {
  name: string;
  history: string;
  image_url: string;
  travel_tips?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  temples?: TempleInfo[];
  quickReplies?: string[];
}