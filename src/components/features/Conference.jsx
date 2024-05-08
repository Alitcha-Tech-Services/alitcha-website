
import ConferenceItem from "./ConferenceItem";
import React from "react";
function Conference() {
  return (
    <div>
      <head>
      </head>
      <main className="main">

        <section className="conferences">
          <div className="container">
            <div className="conference-grid">
              <p>
            <h2>Conférences</h2>
            <i className="left-icon">0  0</i></p>
            
              <ConferenceItem
                title="Conférence sur l'intelligence artificielle"
                description="Vorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <ConferenceItem
                title="Conférence sur l'intelligence artificielle"
                description="Varem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <ConferenceItem
                title="Conférence sur l'intelligence artificielle"
                description="Vorem Ipsum dolor sit amet, consectetur adipiscing elit."
              />
               <ConferenceItem
                title="Conférence sur l'intelligence artificielle"
                description="Vorem Ipsum dolor sit amet, consectetur adipiscing elit."
              />
               <ConferenceItem
                title="Conférence sur l'intelligence artificielle"
                description="Vorem Ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
        </section>
        </main>
       
    </div>
  );
}

export default Conference;