import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<AddContact></AddContact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
