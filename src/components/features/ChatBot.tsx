
import { useState } from 'react';
import { MessageSquare, X, Send, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi there! I\'m MediBot, your healthcare assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { type: 'user', content: input }]);
    
    // Clear input
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Thank you for your message! I\'m a demo chatbot. In a real application, I would help you find medicines, suggest alternatives, show pharmacy availability, and help with prescriptions and order tracking.'
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-40 bottom-5 right-5 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-medrush-blue hover:bg-blue-600'
        }`}
      >
        {isOpen ? <X size={24} color="white" /> : <MessageSquare size={24} color="white" />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed z-30 bottom-20 right-5 w-80 sm:w-96 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden animate-slide-in">
          {/* Chat header */}
          <div className="bg-medrush-blue text-white p-4">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <div className="bg-primary-foreground rounded-full p-1">
                  <MessageSquare size={16} className="text-medrush-blue" />
                </div>
              </Avatar>
              <div>
                <h3 className="font-medium">MediBot</h3>
                <p className="text-xs opacity-90">Online | Healthcare Assistant</p>
              </div>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user' 
                        ? 'bg-medrush-blue text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat input */}
          <div className="p-3 border-t flex items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 mr-2"
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-medrush-blue hover:text-medrush-blue hover:bg-blue-50 mr-1"
            >
              <Mic size={18} />
            </Button>
            <Button 
              size="icon" 
              onClick={handleSendMessage} 
              className="bg-medrush-blue hover:bg-blue-600"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
