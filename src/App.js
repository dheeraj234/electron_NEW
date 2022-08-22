import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Display from './Display';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const formData = JSON.parse(localStorage.getItem('formData'));

function App() {
  const [details, setDetails] = useState(formData);
  const setFormDetails = (details) => {
    setDetails(details);
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home setFormDetails={setFormDetails} />} />
          <Route path="/display" element={<Display details={details} />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
