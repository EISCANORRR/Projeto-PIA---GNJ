// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Create from "./components/create/create";
import Procurar from "./components/search/search";
import Delete from "./components/delete1/delete1";
import './index.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Delete" element={<Delete />} />
      <Route path="/Report" element={<Procurar />} />
    </Routes>
  </BrowserRouter>
);
