import React, {Fragment} from 'react';
import Header from "./common/header";
import {Provider} from 'react-redux';
import {GlobalIconfont} from "./statics/iconfont/iconfont";
import {GlobalBody} from "./styles";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <GlobalIconfont/>
            <GlobalBody/>
        </Provider>

    );
}

export default App;
