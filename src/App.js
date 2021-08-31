import React from 'react';
import './App.css';
import Main from "./hoc/UI/Main/Main";
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
