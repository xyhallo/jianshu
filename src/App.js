import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Globalstyle } from "./style.js";
import { IconFontGlobalstyle } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import write from "./pages/write";

function App() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                <Globalstyle />
                <IconFontGlobalstyle />
                <Header />
                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/detail/:id" exact component={Detail}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/write" exact component={write}></Route>
                    </div>
                </BrowserRouter>
        </Provider>
    );
}

export default App;
