import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import Add from './Add';
import Edit from './Edit';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Dashboard />} />
          <Route path="/staff/add" element={<Add />} />
          <Route path="/staff/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
reportWebVitals();