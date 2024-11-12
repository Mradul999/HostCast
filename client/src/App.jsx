import React from "react";
import Lobby from "./screens/Lobby";
import Room from "./screens/Room";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />}></Route>
        <Route path="/room" element={<Room />}></Route>
      </Routes>
    </div>
  );
};

export default App;
