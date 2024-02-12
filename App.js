const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "I am H1 Tag")
    )
  );
  // React ELement is nothing but an object which still run or an HTML Browser understands
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  // Think About why jsx is used ??