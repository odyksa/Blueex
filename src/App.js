import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import FAQ from './pages/FAQ';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/news" component={News}/>
                        <Route path="/faq" component={FAQ}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
