import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router';
import './styles/common.scss';
import './styles/reset.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Router />);
