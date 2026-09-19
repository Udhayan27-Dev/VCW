import { HashRouter } from 'react-router-dom';
import { ToastProvider } from './components/UI/Toast';
import App from './App';
import './styles/global.css';
import './styles/components.css';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </HashRouter>
);
