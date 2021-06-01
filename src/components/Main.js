import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Rail from './Rail';
import Bus from './Bus';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FACTS } from '../shared/facts';
import { COVID } from '../shared/covid';
import { EQUITY } from '../shared/equity';
import { HISTORY } from '../shared/history';

class Main extends Component {

    constructor(props) {
            super(props); {
            this.state = {
                history: HISTORY,
                facts: FACTS,
                covid: COVID,
                equity: EQUITY
            }
        };
    }

    render() {


        const HomePage = () => {
            return (
                <Home fact={this.state.facts.filter(fact => fact.featured)[0]}
                    covid={this.state.covid.filter(covid => covid.featured)[0]}
                    equity={this.state.equity.filter(equity => equity.featured)[0]}
                />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' render={() => <About history={this.state.history} />} />
                    <Rail exact path='/rail' component={Rail}/>
                    <Route exact path='/Bus' render={() => <Bus partners={this.props.bus} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;