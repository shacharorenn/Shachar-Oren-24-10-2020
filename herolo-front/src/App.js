import React from 'react';
import './css/bootstrap.min.css';
import './css/tooplate-style.css';

import {Header} from "./MessageController/Header";
import {MessageForm} from "./MessageController/MessageForm";
import {AllMessages} from "./MessageController/AllMessages";
import {About} from "./MessageController/About";

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Switch>  
    <div className="tm-container mx-auto">
        <section className="tm-section tm-section-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Route exact component={AllMessages} path="/" />
                <Route component={About} path="/about" />
              </div>
            </div>
          </div>
        </section>
        <section className="tm-section pt-2 pb-3 container">
          <Route exact component={MessageForm} path="/" />
        </section>
    </div>
    </Switch>
    </>
  );
}

export default App;
