import { Component } from "react";
import AdminData from "../Data/admin.json";
import MembersData from "../Data/DB.json";
import Admins from "../assets/Ellipse 9.png";
import '../styles/parametre.css'

class ParametresGeneraux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {},
      members: [],
    };
  }

  componentDidMount() {
    this.loadAdminData();
    this.loadMembersData();
  }

  loadAdminData = async () => {
    const admin = AdminData;
    this.setState({ admin });
  };

  loadMembersData = async () => {
    const members = MembersData;
    this.setState({ members });
  };

  render() {
    const { admin, members } = this.state;

    // Calcul des statistiques
    const totalMembers = members.length;
    const archivedMembers = members.filter(
      (member) => member.statut === "archivé"
    ).length;
    const blockedMembers = members.filter(
      (member) => member.statut === "bloqué"
    ).length;

    return (
      <>
      <h3>Paramètres Généraux</h3>
      <div className=" d-flex justify-content-around my-3">

        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="text-secondary">Profil</span> <br />
        <img
        
              src={Admins}
              alt={`${admin.prenom} ${admin.nom}`}
              className="admin-image"
            />
            <h4>{admin.prenom} {admin.nom}</h4>
            <h5>{admin.statut}</h5>
            <button className="btn Admin h6 ">Editer Admin</button>
        </div>
        <div className="general-settings  ">

          <div className="admin-profile">
          <h5 className="bgprofil">Informations</h5>
            
            <div className="admin-info">
              <p>
               Prénom : {admin.prenom}
              </p>
              <p>
               Nom : {admin.nom}
              </p>
              <p>
               Statut : {admin.statut}
              </p>
              <p>
               Email : {admin.email}
              </p>
            </div>
          </div>

          <div className="statistics">
            <h5 className="bgprofil">Statistiques</h5>
            <p>
             Total de Membres : {totalMembers}
            </p>
            <p>
             Membres Archivés : {archivedMembers}
            </p>
            <p>
             Membres Bloqués : {blockedMembers}
            </p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default ParametresGeneraux;
