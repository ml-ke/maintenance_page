import React from "react";
import ReactDOM from "react-dom";
import ComingSoon from "react-coming-soon";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ComingSoon
        title="ML_KE will be up soon..."
        subtitle="approximately"
        bgColor="#040404"
        textColor="#bfbfb9"
        date="Mon Aug 12 2024 17:00:00 GMT-0600 (Mountain Daylight Time)"
        illustration="web-development"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
