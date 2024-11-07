import App from './components/App';

import { createRoot } from 'react-dom/client';

import "./styles/uikit/css/uikit.min.css";
import "./styles/uikit/js/uikit.min.js";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);
