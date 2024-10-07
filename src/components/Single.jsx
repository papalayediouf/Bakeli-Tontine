import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Component } from "react";
import Dashboard from "./Dashboard.jsx";
import Utilisateurs from "./Utilisateurs.jsx";
import Cotisations from "./Cotisations.jsx";
import Archiver from "./Archiver.jsx";
import Bloquer from "./Bloquer.jsx";
import "../styles/Single.css";
import MesUtilisateurs from "./Mesutilisateurs.jsx";
import ParametresGeneraux from "./ParametresGeneraux.jsx";



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
          <nav className="Sidebar  flex-column text-white fw-semi">
            <h1 className="">Bakeli Tontine</h1>
            <ul className="navbar-nav flex-column px-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/utilisateurs">
                  Utilisateurs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cotisations">
                  Cotisations
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn text-white border border-0 dropdown-toggle p-0 "
                  onClick={this.toggleDropdown}
                  aria-expanded={this.state.dropdownOpen}
                >
                  Paramètres
                </button>
                {this.state.dropdownOpen && (
                  <div className="dropdown-menu  show bg-dropdown border border-0 text-start">
                    <Link className="dropdown-item" to="/ParametresGeneraux">
                      ParametresGeneraux
                    </Link>

                    <Link className="dropdown-item" to="/utilisateurs">
                      Utilisateurs
                    </Link>
                    <Link className="dropdown-item" to="/Mesutilisateurs">
                      MesUtilisateurs
                    </Link>
                    <Link className="dropdown-item" to="/Archiver">
                      Archives
                    </Link>
                    <Link className="dropdown-item" to="/Bloquer">
                      Membres Bloques
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <div className="flex-grow-1">
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/utilisateurs" element={<Utilisateurs />} />
              <Route path="/cotisations" element={<Cotisations />} />
              <Route
                path="/ParametresGeneraux"
                element={<ParametresGeneraux />}
              />
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

export default Single;
