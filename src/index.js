import React from 'react';
import ReactDOM from 'react-dom/client';

import {MyComponent, MyHello } from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <MyComponent />
        <MyHello />
    </>
);
