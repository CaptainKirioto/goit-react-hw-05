// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/NotFound/NotFound";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
