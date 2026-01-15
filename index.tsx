
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * FIXED: Ensuring the mount logic is robust for static hosting.
 * type="module" is deferred by default, but we verify root existence.
 */
const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Fatal: #root element missing. Check index.html structure.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Fatal: React Render Crash:", error);
  }
};

// Check if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
