// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add this for browser compatibility
window.process = {
  env: {
    NODE_ENV: 'production'
  }
};

// Self-initializing function for the chatbot
const initChatbot = () => {
  // Create container element if it doesn't exist
  let chatbotContainer = document.getElementById('cbw-chatbot-container');
  
  if (!chatbotContainer) {
    chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'cbw-chatbot-container';
    document.body.appendChild(chatbotContainer);
  }
  
  // Render your React app into the container
  const root = ReactDOM.createRoot(chatbotContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Expose the init function globally
window.CbwChatbot = {
  init: initChatbot
};

// Auto-initialize if the DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initChatbot, 1);
} else {
  document.addEventListener('DOMContentLoaded', initChatbot);
}

// Export for potential direct usage
export default { init: initChatbot };