import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { Component } from "react";
import Dashboard from "./Dashboard.jsx";
import Utilisateurs from "./Utilisateurs.jsx";
import Cotisations from "./Cotisations.jsx";
import Archiver from "./Archiver.jsx";
import Bloquer from "./Bloquer.jsx";
import "../styles/Single.css";
import MesUtilisateurs from "./Mesutilisateurs.jsx";
import ParametresGeneraux from "./ParametresGeneraux.jsx";
import menu from "../assets/category.png";
import user from "../assets/user.png";
import money from "../assets/money.png";
import vector from "../assets/Vector.png";
import sac from '../assets/Group 33777.png';
import Inscription from "./Inscription.jsx";
import Connexion from "./Connexion.jsx";
import PropTypes from 'prop-types';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
  };

  render() {
    return (
      <Router>
        <div className="d-flex">
          <Sidebar dropdownOpen={this.state.dropdownOpen} toggleDropdown={this.toggleDropdown} />

          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Inscription />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/utilisateurs" element={<Utilisateurs />} />
              <Route path="/cotisations" element={<Cotisations />} />
              <Route path="/ParametresGeneraux" element={<ParametresGeneraux />} />
              <Route path="/Mesutilisateurs" element={<MesUtilisateurs />} />
              <Route path="/Archiver" element={<Archiver />} />
              <Route path="/Bloquer" element={<Bloquer />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

// Composant Sidebar
const Sidebar = ({ dropdownOpen, toggleDropdown }) => {
  const location = useLocation();

  // Vérifier si on est sur les pages d'inscription ou de connexion
  if (location.pathname === "/" || location.pathname === "/connexion") {
    return null; // Ne pas afficher la sidebar
  }

  return (
    <nav className="Sidebar flex-column text-white fw-semi">
      <h3 className="d-flex align-items-center ">
        <img src={sac} alt="" />
        <span className="px-2"> Bakeli Tontine</span>
      </h3>
      <ul className="navbar-nav flex-column px-3">
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center" to="/dashboard">
            <img src={menu} alt="" />
            <span className="px-2"> Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center" to="/utilisateurs">
            <img src={user} alt="" />
            <span className="px-2"> Utilisateurs</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center" to="/cotisations">
            <img src={money} alt="" />
            <span className="px-2"> Cotisations</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <button
            className="btn text-white border border-0 dropdown-toggle p-0 d-flex align-items-center"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
          >
            <img src={vector} alt="" />
            Paramètres
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu show bg-dropdown border border-0 text-start">
              <Link className="dropdown-item" to="/ParametresGeneraux">
                Paramètres Généraux
              </Link>
              <Link className="dropdown-item" to="/Mesutilisateurs">
                Mes Utilisateurs
              </Link>
              <Link className="dropdown-item" to="/Archiver">
                Archives
              </Link>
              <Link className="dropdown-item" to="/Bloquer">
                Membres Bloqués
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default Single;
