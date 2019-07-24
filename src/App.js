import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div className="app">
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/news" component={News} />
                            <Route path="/faq" component={FAQ} />
                        </Switch>
                        <Footer />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
