

import { Component } from "react";
import Nav from "./nav";
import Data from "../Data/DB.json"; 
import Modal from "react-modal"; 
import Pagination from "./Pagination"; 

class MembresBloques extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockedMembersData: [], 
      currentPage: 0,
      itemsPerPage: 5,
      modalIsOpen: false,
      selectedMember: null,
    };
  }

  componentDidMount() {
    const blockedMembers = Data.filter(member => member.statut === "bloqué");
    this.setState({
      blockedMembersData: blockedMembers || [],
    });
  }

  handlePageChange = (selectedPage) => {
    this.setState({ currentPage: selectedPage.selected });
  };

  openModal = (member) => {
    this.setState({ modalIsOpen: true, selectedMember: member });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedMember: null });
  };

  render() {
    const { blockedMembersData, currentPage, itemsPerPage, modalIsOpen, selectedMember } = this.state;
    const offset = currentPage * itemsPerPage;
    const currentBlockedMembers = blockedMembersData.slice(offset, offset + itemsPerPage);

    return (
      <>
        <div className="shadow-lg d-flex justify-content-between">
          <span className="fw-semibold fs-5">Membres Bloqués</span>
          <Nav />
        </div>

        <div className="container my-4">
          <div className="row mt-3">
            <div className="col-12">
              <div className="card shadow border border-0">
                <div className="card-body p-0">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Membre</th>
                        <th scope="col">Date de Début</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBlockedMembers.map((member, index) => (
                        <tr key={index}>
                          <td>{member.Nom}</td>
                          <td>{member.Date}</td>
                          <td>
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => this.openModal(member)}
                            >
                              Voir Bloqué
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
            pageCount={Math.ceil(blockedMembersData.length / itemsPerPage)}
            onPageChange={this.handlePageChange}
          />

          {/* Modal pour les informations du membre bloqué */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Informations du Membre Bloqué"
          >
            <h2>Informations du Membre Bloqué</h2>
            {selectedMember && (
              <div>
                <p><strong>Nom :</strong> {selectedMember.Nom}</p>
                <p><strong>Date de Début :</strong> {selectedMember.Date}</p>
                <p><strong>Montant Cotisé :</strong> {selectedMember.montant_cotise ? selectedMember.montant_cotise.toFixed(2) + ' €' : 'N/A'}</p>
                <p><strong>Montant Restant :</strong> {selectedMember.montant_restant ? selectedMember.montant_restant.toFixed(2) + ' €' : 'N/A'}</p>
                <p><strong>Statut :</strong> {selectedMember.statut}</p>
                <button onClick={this.closeModal}>Fermer</button>
              </div>
            )}
          </Modal>
        </div>
      </>
    );
  }
}

export default MembresBloques;
