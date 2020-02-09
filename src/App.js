import React from 'react';
import Header from "./common/header";
import {Provider} from 'react-redux';
import {GlobalIconfont} from "./statics/iconfont/iconfont";
import {GlobalBody} from "./styles";
import store from "./store";
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>

        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
        <GlobalIconfont/>
        <GlobalBody/>

    </Provider>

  );
}

export default App;
