import React, { useState, useEffect } from "react";
import { getLocalStorageData, setLocalStorageData } from "../utils/localStorageHelper";

const ChatUI = () => {
  const [messages, setMessages] = useState(() => getLocalStorageData("chatMessages"));
  const [inputMessage, setInputMessage] = useState("");

  // Bot responses based on user input
  const getBotReply = (userMessage) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
      return "I'm just a bot, but I'm functioning perfectly. How about you?";
    } else if (userMessage.toLowerCase().includes("bye")) {
      return "Goodbye! Have a great day!";
    }
    return "I'm not sure how to respond to that. Could you elaborate?";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // User's message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
      sender: "You",
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLocalStorageData("chatMessages", updatedMessages);
    setInputMessage("");

    // Simulate receiving a bot reply
    setTimeout(() => {
      const botMessage = {
        id: Date.now(),
        text: getBotReply(inputMessage),
        timestamp: new Date().toLocaleTimeString(),
        sender: "Bot",
      };
      const botUpdatedMessages = [...updatedMessages, botMessage];
      setMessages(botUpdatedMessages);
      setLocalStorageData("chatMessages", botUpdatedMessages);
    }, 1000);
  };

  return (
    <div className="flex flex-col max-w-md mx-auto h-[90vh] rounded-5 bg-gray-100 text-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${msg.sender === "You"
                ? "text-right"
                : "text-left text-gray-600"
              }`}
          >
            <p
              className={`inline-block p-2 rounded-lg ${msg.sender === "You"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
                }`}
            >
              {msg.text}
            </p>
            <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white rounded-t-lg flex items-center space-x-4 shadow-inner">
        <input
          type="text"
          className="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="p-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>


    </div>
  );
};

export default ChatUI;

