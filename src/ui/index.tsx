import App from './components/App';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './storage/store';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
import 'uikit/dist/css/uikit.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
