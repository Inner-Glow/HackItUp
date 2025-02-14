import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from '../components/header.jsx';
const rootElement = document.getElementById('header');
const root = createRoot(rootElement);
root.render(<Header/>)
