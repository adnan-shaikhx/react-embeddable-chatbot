// src/components/ChatWidget.jsx
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg = {
        sender: 'bot',
        text: 'Random reply: ' + Math.random().toString(36).substring(7)
      };
      setMessages((msgs) => [...msgs, botMsg]);
    }, 2000);
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{ padding: '10px 15px', borderRadius: '50%', background: 'purple', color: '#fff', border: 'none' }}
        >
          💬
        </button>
      ) : (
        <div style={{ width: 300, height: 400, background: '#fff', borderRadius: 10, boxShadow: '0 0 10px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 10, background: 'purple', color: '#fff', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
            Chatbot
            <button style={{ float: 'right', background: 'transparent', color: '#fff', border: 'none' }} onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div style={{ flex: 1, padding: 10, overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                <span style={{ background: msg.sender === 'user' ? '#ddd' : '#eee', padding: '5px 10px', borderRadius: 10 }}>{msg.text}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              style={{ flex: 1, border: 'none', padding: 10 }}
            />
            <button onClick={handleSend} style={{ padding: '10px 15px', border: 'none', background: 'purple', color: '#fff' }}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
