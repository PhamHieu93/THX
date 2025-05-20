import React, { useState, useRef, useEffect } from "react";
import "./chatbox.scss";

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Xin chào tôi giúp gì được cho bạn!", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: inputText, sender: "user" }]);
    setInputText("");

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponses = [
        "Cảm ơn bạn đã liên hệ với Tạp Hóa Xanh!",
        "Tôi có thể giúp gì cho bạn?",
        "Bạn cần mua sản phẩm nào?",
        "Đơn hàng của bạn sẽ được giao trong 2 giờ tới.",
        "Bạn có thể gọi số 1900 1234 để được hỗ trợ thêm."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: "bot" }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbox-popup">
      <div className="chatbox-header">
        <span>TẠP HÓA XANH</span>
        <button className="chatbox-close" onClick={handleClose}>×</button>
      </div>
      <div className="chatbox-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbox-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbox-footer">
        <input 
          type="text" 
          placeholder="Nhập tin nhắn..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <polygon points="2,18 18,10 2,2" fill="#2196F3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;