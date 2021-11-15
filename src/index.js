import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import MyCards from './components/MyCards';
import XterCards from './components/XterCards';
import reportWebVitals from './reportWebVitals';
import characterImages from "./imageData/charactersData";
import planetImages from "./imageData/planetsData";


ReactDOM.render(
  
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}/>
      <Route path="planets" element={<MyCards planetImages={planetImages} characterImages={characterImages} />} />
      <Route path="characters" element={<XterCards  characterImages={characterImages}/>} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
