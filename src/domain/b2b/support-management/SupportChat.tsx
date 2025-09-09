import { X, Send } from "lucide-react";
import { useState } from "react";
import type { ChatMessage } from "./data";

interface SupportChatProps {
  isOpen: boolean;
  onClose: () => void;
  assignedTo: string;
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
}

function SupportChat({ isOpen, onClose, assignedTo, messages, onSendMessage }: SupportChatProps) {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-700/70 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl h-[600px] flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">WellVantage Support Chat</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {assignedTo.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-sm text-gray-600">{assignedTo}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-green-100 text-gray-800'
                  }`}
                >
                  {message.type === 'text' ? (
                    <p className="text-sm">{message.message}</p>
                  ) : (
                    <img
                      src={message.imageUrl}
                      alt="Shared image"
                      className="max-w-full h-auto rounded"
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 px-2">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportChat;
