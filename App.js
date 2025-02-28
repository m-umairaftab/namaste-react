import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
  <h1 className="head" tabIndex={"5"}>
    Namaste React Using JSX 🚀
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
// async defer
root.render(<HeadingComponent />);
