import React from 'react';
import './css/bootstrap.min.css';
import './css/tooplate-style.css';

import MessageForm from "./MessageController/MessageForm";
import AllMessages from "./MessageController/AllMessages";

export const baseUrl = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <div className="tm-container mx-auto">
        <section className="tm-section tm-section-1">
          <div className="container row col-sm-12">
                <AllMessages/>
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
