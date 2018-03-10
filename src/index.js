import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import BinaryFun from './components/BinaryFun';

ReactDOM.render(
    <BinaryFun />, 
    document.getElementById('root')
);
registerServiceWorker();
console.log("%c%s", "color: black; font-size: 24px;", "Developed by Jorge Rubiano https://jorger.github.io/page/es/");