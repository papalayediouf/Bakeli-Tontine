
import Admins from "../assets/Ellipse 9.png";

function Nav() {
 
    return (
      <>
        <div className="d-flex align-items-center gx-3">
          <div>
            <i className="bi  bi-bell "></i>
          </div>
          <div className="d-flex">
            <div>
              <img src={Admins} alt="Admis" />
            </div>
            <div>
              <span className="fw-semibold fs-">Ndiaga Sall</span> <br />
              <span className="text-secondary">Administrtor</span>
            </div>
            <div>
              <div className="btn-group ">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle bg-white text-dark border border-0"
                  data-bs-toggle="dropdown"
                  data-bs-display="s"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <button className="dropdown-item" type="button">
                      Profil
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Modifier Mot de passe
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Deconnexion
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Nav;
