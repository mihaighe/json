import React from "react";
import PostList from "./PostList";
import logo from "../json.png"

const App = () => {
  return (
      <div className="ui container">
            <img alt="logo" src={logo} style={{borderBottom: "7px solid black"}}></img>
            <PostList />
      </div>
  );
};

export default App;
