




import { Component } from "react";

import "../styles/Dashboard.css";
import Nav from "./nav";
import Data from "../Data/DB.json"; 
import Pagination from "./Pagination"; 


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersData: [],
      currentPage: 0,
      itemsPerPage: 5,
    };
  }

  componentDidMount() {
    this.setState({
      membersData: Data || [],
    });
  }

  handlePageChange = (selectedPage) => {
    this.setState({ currentPage: selectedPage.selected });
  };

  render() {
    const { membersData, currentPage, itemsPerPage } = this.state;
    const offset = currentPage * itemsPerPage;
    const currentMembers = membersData.slice(offset, offset + itemsPerPage);

    return (
      <>
        <div className="shadow-lg d-flex justify-content-between">
          <span className="fw-semibold fs-5">Dashboard</span>
          <Nav />
        </div>
        
        <div>
          <div className="container my-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card border border-0 shadow">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">Total Cotisé</h6>
                    <p className="card-text fw-semi-bold">
                      {membersData.reduce((total, member) => total + member.montant_cotise, 0).toFixed(2)} €
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card border border-0 shadow">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">Montant Restants</h6>
                    <p className="card-text fw-semi-bold">
                      {membersData.reduce((total, member) => total + member.montant_restant, 0).toFixed(2)} €
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5">
                <div className="card border border-0 shadow">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">Statistiques</h6>
                    <p className="card-text fw-semi-bold">
                      Total des membres : {membersData.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card shadow border border-0">
                  <h5 className="card-header">Évaluation des cotisations</h5>
                  <div className="card-body"></div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-5">
                <div className="card shadow border border-0">
                  <h5 className="card-header">Statistiques Avancées</h5>
                  <div className="card-body">
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card shadow border border-0">
                  <div className="card-body p-0">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Nom</th>
                          <th scope="col">Montant</th>
                          <th scope="col">Date</th>
                          <th scope="col">Statut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentMembers.map((member, index) => (
                          <tr key={index}>
                            <td>{member.Nom}</td>
                            <td>{member.montant_cotise.toFixed(2)} €</td>
                            <td>{member.Date}</td>
                            <td>{member.statut}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-5">
                <div className="card shadow border border-0">
                  <div className="card-body p-0">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Membres</th>
                          <th scope="col">Date de début</th>
                          <th scope="col">Progression</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentMembers.map((member, index) => (
                          <tr key={index}>
                            <td>{member.Nom}</td>
                            <td>{member.Date}</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: member.Progression }}
                                  aria-valuenow={parseInt(member.Progression)}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  {member.Progression}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <Pagination
            pageCount={Math.ceil(membersData.length / itemsPerPage)}
            onPageChange={this.handlePageChange}
          />
        </div>
      </>
    );
  }
}

export default Dashboard;
