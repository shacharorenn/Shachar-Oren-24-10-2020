import React from 'react';
import './css/bootstrap.min.css';
import './css/tooplate-style.css';

import MessageForm from "./components/MessageForm";
import AllMessages from "./components/AllMessages";

export const baseUrl = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
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
        <section className="tm-section pt-2 pb-3">
          <div className="container">
            <MessageForm/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
