
import React from 'react';
import { ChatMessage, Language } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
  language: Language;
  showQuickReplies: boolean;
  onQuickReplyClick: (text: string) => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, language, showQuickReplies, onQuickReplyClick }) => {
  const isUser = message.role === 'user';
  const bubbleClasses = isUser
    ? 'bg-yellow-200 text-yellow-900 self-end'
    : 'bg-white/90 text-red-900 self-start';
  const textContainerClasses = `p-4 rounded-xl max-w-lg lg:max-w-xl shadow-md ${bubbleClasses}`;
  
  const textClasses = language === 'kn' ? 'font-kannada' : '';

  return (
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-4`}>
      <div className={textContainerClasses}>
        <p className={`whitespace-pre-wrap ${textClasses}`}>{message.text}</p>
        {message.temples && message.temples.length > 0 && (
          <div className="mt-4 grid gap-4">
            {message.temples.map((temple, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-3 border border-red-200">
                <h3 className={`font-bold text-md mb-2 ${textClasses}`}>{temple.name}</h3>
                <img 
                    src={temple.image_url} 
                    alt={temple.name} 
                    className="w-full h-48 object-cover rounded-md mb-2" 
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; 
                        target.src = `https://picsum.photos/seed/${temple.name}/600/400`;
                    }}
                />
                <p className={`text-sm ${textClasses}`}>{temple.history}</p>
                {temple.travel_tips && (
                  <div className="mt-3 pt-3 border-t border-red-200/50">
                    <h4 className={`font-semibold text-sm mb-1 text-red-800 ${textClasses}`}>
                      {language === 'kn' ? 'ಪ್ರಯಾಣ ಸಲಹೆಗಳು' : 'Travel Tips'}
                    </h4>
                    <p className={`text-sm text-red-900/80 ${textClasses}`}>{temple.travel_tips}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {showQuickReplies && message.quickReplies && message.quickReplies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 self-start">
            {message.quickReplies.map((reply, index) => (
                <button
                    key={index}
                    onClick={() => onQuickReplyClick(reply)}
                    className={`px-4 py-2 text-sm font-semibold text-red-700 bg-white/80 rounded-full border border-red-300 hover:bg-white hover:shadow-md transition-all duration-200 ${textClasses}`}
                >
                    {reply}
                </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;