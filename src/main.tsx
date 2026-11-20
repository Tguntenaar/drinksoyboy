import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/bagel-fat-one/latin-400.css';
import '@fontsource-variable/schibsted-grotesk/wght.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
