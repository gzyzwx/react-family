// document.getElementById('app').innerHTML = "Webpack works"
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/index.js';

ReactDom.render(
    getRouter(), document.getElementById('app'));