import { Component } from "react";
// import Nav from "./nav";
import Data from "../Data/DB.json"; 
import Modal from "react-modal"; 
import Pagination from "./Pagination"; 

class Cotisation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersData: [],
      currentPage: 0,
      itemsPerPage: 5,
      modalIsOpen: false,
      detailModalIsOpen: false,
      selectedMember: null,
      detailCurrentPage: 0,
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

  handleDetailPageChange = (selectedPage) => {
    this.setState({ detailCurrentPage: selectedPage.selected });
  };

  openModal = (member) => {
    this.setState({ modalIsOpen: true, selectedMember: member });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedMember: null });
  };

  openDetailModal = () => {
    this.setState({ detailModalIsOpen: true });
  };

  closeDetailModal = () => {
    this.setState({ detailModalIsOpen: false });
  };

  render() {
    const { membersData, currentPage, itemsPerPage, modalIsOpen, detailModalIsOpen, selectedMember, detailCurrentPage } = this.state;
    const offset = currentPage * itemsPerPage;
    const currentMembers = membersData.slice(offset, offset + itemsPerPage);

    // Pagination pour le modal
    const detailOffset = detailCurrentPage * itemsPerPage;
    const currentDetailMembers = membersData.slice(detailOffset, detailOffset + itemsPerPage);

    return (
      <>
        <div className="shadow-lg d-flex justify-content-between">
          <span className="fw-semibold fs-5">Cotisations</span>
          {/* <Nav/> */}
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0 shadow">
                <div className="card-body">
                  <span>Membres Actif</span>
                  <h6 className="card-subtitle mb-2 ">
                    10 Membres
                  </h6>
                 
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0 shadow">
                <div className="card-body">
                <span>Membres Bloquer</span>
                  <h6 className="card-subtitle mb-2 ">
                   6 Membres
                  </h6>
                 
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0 shadow">
                <div className="card-body">
                <span>Total effectif</span>
                  <h6 className="card-subtitle mb-2 ">
                   90 Membres
                  </h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <button className="btn btn-primary" onClick={this.openDetailModal}>
           . . .
          </button>

          <div className="row mt-3">
            <div className="col-12">
              <div className="card shadow border border-0">
                <div className="card-body p-0">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Membre</th>
                        <th scope="col">Date de Début</th>
                        <th scope="col">Montant Cotisé</th>
                        <th scope="col">Montant Restant</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMembers.map((member, index) => (
                        <tr key={index}>
                          <td>{member.Nom}</td>
                          <td>{member.Date}</td>
                          <td>{member.montant_cotise.toFixed(2)} €</td>
                          <td>{member.montant_restant.toFixed(2)} €</td>
                          <td>
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => this.openModal(member)}
                            >
                              Voir
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <Pagination
            pageCount={Math.ceil(membersData.length / itemsPerPage)}
            onPageChange={this.handlePageChange}
          />

          {/* Modal pour les informations du membre */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Informations du Membre"
          >
            <h2>Informations du Membre</h2>
            {selectedMember && (
              <div>
                <p><strong>Nom :</strong> {selectedMember.Nom}</p>
                <p><strong>Date de Début :</strong> {selectedMember.Date}</p>
                <p><strong>Montant Cotisé :</strong> {selectedMember.montant_cotise.toFixed(2)} €</p>
                <p><strong>Montant Restant :</strong> {selectedMember.montant_restant.toFixed(2)} €</p>
                <p><strong>Statut :</strong> {selectedMember.statut}</p>
                <button onClick={this.closeModal}>Fermer</button>
              </div>
            )}
          </Modal>

          {/* Modal pour le tableau de détails des cotisations */}
          <Modal
            isOpen={detailModalIsOpen}
            onRequestClose={this.closeDetailModal}
            contentLabel="Détails des Cotisations"
          >
            <h2>Détails des Cotisations</h2>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Membre</th>
                  <th scope="col">Date de Début</th>
                  <th scope="col">Date de Fin</th>
                  <th scope="col">Montant Total Cotisé</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentDetailMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.Nom}</td>
                    <td>{member.Date}</td>
                    <td>{member.date_de_fin}</td>
                    <td>{member.montant_total_cotise.toFixed(2)} €</td>
                    <td>{member.statut}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => this.openModal(member)}
                      >
                        Voir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              pageCount={Math.ceil(membersData.length / itemsPerPage)}
              onPageChange={this.handleDetailPageChange}
            />
            <button onClick={this.closeDetailModal}>Fermer</button>
          </Modal>
        </div>
      </>
    );
  }
}

export default Cotisation;
