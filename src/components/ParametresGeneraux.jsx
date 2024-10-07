import  { Component } from 'react';
import AdminData from '../Data/admin.json'; 
import MembersData from '../Data/DB.json'; 

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
    const archivedMembers = members.filter(member => member.statut === 'archivé').length;
    const blockedMembers = members.filter(member => member.statut === 'bloqué').length;

    return (
      <div className="general-settings">
        <h2>Paramètres Généraux</h2>
        <div className="admin-profile">
          <img src={admin.image} alt={`${admin.prenom} ${admin.nom}`} className="admin-image" />
          <div className="admin-info">
            <p><strong>Prénom :</strong> {admin.prenom}</p>
            <p><strong>Nom :</strong> {admin.nom}</p>
            <p><strong>Statut :</strong> {admin.statut}</p>
            <p><strong>Email :</strong> {admin.email}</p>
          </div>
        </div>

        <h3>Statistiques</h3>
        <div className="statistics">
          <p><strong>Total de Membres :</strong> {totalMembers}</p>
          <p><strong>Membres Archivés :</strong> {archivedMembers}</p>
          <p><strong>Membres Bloqués :</strong> {blockedMembers}</p>
        </div>
      </div>
    );
  }
}

export default ParametresGeneraux;
