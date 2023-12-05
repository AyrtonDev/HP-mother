import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/';

const RootComponent = document.getElementById('root');

const root = createRoot(RootComponent);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
