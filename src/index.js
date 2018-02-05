import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from './router/index.js';


import store from './store';

// 打印初始状态
console.log(store.getState());

/*初始化*/
renderWithHotReload(getRouter());

if (module.hot) {
    module.hot.accept(
        './router/index.js', () => {
            const getRouter = require('./router/index.js').default;
            renderWithHotReload(getRouter());
        }
    );
}
console.log("color")
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
