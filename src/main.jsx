import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './components/UI/Toast';
import App from './App';
import './styles/global.css';
import './styles/components.css';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </BrowserRouter>
);
