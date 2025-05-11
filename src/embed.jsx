// src/embed.jsx - Make sure React is properly imported and bundled
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Update with your actual component path

// Self-contained IIFE with no external dependencies
(function() {
  // Create container for the widget
  const createContainer = () => {
    const containerId = 'cbw-chatbot-container';
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.style.position = 'fixed';
      container.style.bottom = '20px';
      container.style.right = '20px';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }
    return container;
  };

  // Initialize with error handling
  const initChatbot = () => {
    try {
      console.log('Initializing chatbot widget...');
      const container = createContainer();
      const root = ReactDOM.createRoot(container);
      root.render(React.createElement(App, null));
      console.log('Chatbot widget initialized successfully');
    } catch (error) {
      console.error('Failed to initialize chatbot widget:', error);
    }
  };

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    setTimeout(initChatbot, 1);
  }
})();