import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},

   [ React.createElement("div",
    {id:"child1"},
    [React.createElement("h1",{},"I'm I am Rishabh Chouhan h1 tag"), React.createElement("h2",{},"I am an h2 tag"),React.createElement("h3",{},"I am in h3 tag")]
  ), React.createElement("div",
    {id:"child2"},
    [React.createElement("h1",{},"I'm an h1 tag"), React.createElement("h2",{},"I am an h2 tag"),React.createElement("h3",{},"I am in h3 tag")]
  )]
);
console.log(parent)








const heading = React.createElement("h1",{id:"heading"},"Hello world from react! ")

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
   root.render(parent);