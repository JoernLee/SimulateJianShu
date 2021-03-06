import React from 'react';
import Header from "./common/header";
import {Provider} from 'react-redux';
import {GlobalIconfont} from "./statics/iconfont/iconfont";
import {GlobalBody} from "./styles";
import store from "./store";
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {
  return (
    <Provider store={store}>

        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}/>
            {/*添加:id，访问detail下要求传递一个id参数，后面link跳转时候进行拼接*/}
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/write' exact component={Write}/>
          </div>
        </BrowserRouter>
        <GlobalIconfont/>
        <GlobalBody/>

    </Provider>

  );
}

export default App;
