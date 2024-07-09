// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useEffect } from 'react';

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('Component rendered');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return <App tab="home" />;
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);

setTimeout(() => {
  const rootElement = document.getElementById('app');
  if (rootElement) {
    root.unmount();
  }
}, 5000);
