import { StrictMode } from 'react'
// import { BrowserRouter as Router, Route,Routes,  Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Single from './components/Single'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Single/>
  </StrictMode>,
)
