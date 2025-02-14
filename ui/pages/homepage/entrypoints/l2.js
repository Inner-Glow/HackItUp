import React from 'react';
import {createRoot} from 'react-dom/client';
import L2 from '../components/l2.jsx';
const rootElement = document.getElementById('l2');
const root = createRoot(rootElement);
root.render(<L2/>)