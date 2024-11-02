import React from 'react';
import ReactDOM from 'react-dom/client';

import {MyComponent, MyHello } from './App';
import Owl from './Owl.js';
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <MyComponent />
        <MyHello />
        <Owl/>
    </>
);
