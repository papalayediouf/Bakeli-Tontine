

import { Component } from "react";
import Nav from "./nav";
import Data from "../Data/DB.json"; 
import Pagination from "./Pagination"; 
import  '../styles/Mesutilisateur.css'

class MesUtilisateurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersData: [],
      currentPage: 0,
      itemsPerPage: 5,
      selectedMember: null,
    };
  }

  componentDidMount() {
    const members = Data || [];
    this.setState({
      membersData: members,
      selectedMember: members[0] || null, 
    });
  }

  handleMemberClick = (member) => {
    this.setState({ selectedMember: member });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      selectedMember: {
        ...prevState.selectedMember,
        [name]: value,
      },
    }));
  };

  handleUpdate = () => {
    const { selectedMember, membersData } = this.state;
    const updatedMembers = membersData.map((member) =>
      member.Nom === selectedMember.Nom ? selectedMember : member
    );

    this.setState({ membersData: updatedMembers });
  };

  handlePageChange = (selectedPage) => {
    this.setState({ currentPage: selectedPage.selected });
  };

  render() {


    const { membersData, currentPage, itemsPerPage, selectedMember } = this.state;
    const offset = currentPage * itemsPerPage;
    const currentMembers = membersData.slice(offset, offset + itemsPerPage);

    return (
      <>




        <div className="shadow-lg d-flex justify-content-between">
          <span className="fw-semibold fs-5">Mes Utilisateurs</span>
          <Nav />
        </div>
        <div className="m-2">
          <h1 className="semibold">Utilisateur</h1>
        </div>

        <div className="container my-4 d-flex membresinput ">
          <div className="row champ2 ">
            <div className="col-12">
              <div className="card border border-0 h-100">
                <div className="card-body p-0 h-100">
                  <table className="table table-borderless h-100 ">
                    <thead>
                      <tr className="colm">
                        <th scope="col " className="colm">Membres</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMembers.map((member, index) => (
                        <tr
                          key={index}
                          onClick={() => this.handleMemberClick(member)} // Changement ici
                          style={{ cursor: "pointer" }} 
                        >
                          <td>{member.Nom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Pagination */}
          <Pagination
            pageCount={Math.ceil(membersData.length / itemsPerPage)}
            onPageChange={this.handlePageChange}
          />
          </div>

          {selectedMember && (
            <div className="row ">
              <div className="col-12">
                <div className="card champ rounded-0  border border-0 border-start ">
                  <h5 className="">Informations du Membre</h5>
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="nom" className="form-label">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nom"
                        name="Nom"
                        value={selectedMember.Nom}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="Date"
                        value={selectedMember.Date}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="montant_cotise" className="form-label">Montant Cotisé</label>
                      <input
                        type="number"
                        className="form-control"
                        id="montant_cotise"
                        name="montant_cotise"
                        value={selectedMember.montant_cotise}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="statut" className="form-label">Statut</label>
                      <input
                        type="text"
                        className="form-control"
                        id="statut"
                        name="statut"
                        value={selectedMember.statut}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <button 
                      className="btn bagcolor-figma mt-2"
                      onClick={this.handleUpdate}
                    >
                      Mettre à jour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          
        </div>
      </>
    );
  }
}

export default MesUtilisateurs;
