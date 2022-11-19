import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from './Music';
import Layout  from './Layout';
import Home  from './Home';
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
