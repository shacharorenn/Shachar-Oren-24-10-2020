import React from 'react';
import './css/bootstrap.min.css';
import './css/tooplate-style.css';

import {MessageForm} from "./MessageController/MessageForm";
import {AllMessages} from "./MessageController/AllMessages";

function App() {
  return (
    <div className="tm-container mx-auto">
        <section className="tm-section tm-section-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <AllMessages/>
              </div>
            </div>
          </div>
        </section>
        <section className="tm-section pt-2 pb-3 container">
            <MessageForm/>
        </section>
    </div>
  );
}

export default App;
