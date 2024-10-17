// import { Component } from "react";
// import Nav from "./nav";
// import Data from "../Data/DB.json";
// import Pagination from "./Pagination";

// class Utilisateurs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       membersData: [],
//       currentPage: 0,
//       itemsPerPage: 5,
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       membersData: Data || [],
//     });
//   }

//   handlePageChange = (selectedPage) => {
//     this.setState({ currentPage: selectedPage.selected });
//   };

//   handleAction = (action, member) => {
//     // Logique pour gérer l'action
//     console.log(action, member);
//   };
//   render() {
//     const { membersData, currentPage, itemsPerPage } = this.state;
//     const offset = currentPage * itemsPerPage;
//     const currentMembers = membersData.slice(offset, offset + itemsPerPage);

//     return (
//       <>
//         <div className="shadow-lg  d-flex justify-content-between">
//           <span className="fw-semibold fs-5">Utilisateurs</span>

//           <Nav />
//         </div>

//         <div className="container my-4">
//           <div className="row">
//             <div className="col-12">
//               <div className="card shadow border border-0">
//                 <div className="card-body p-0">
//                   <table className="table table-borderless">
//                     <thead>
//                       <tr>
//                         <th scope="col">Membres</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Montant</th>
//                         <th scope="col">Progression</th>
//                         <th scope="col">Statut</th>
//                         <th scope="col">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {currentMembers.map((member, index) => (
//                         <tr key={index}>
//                           <td>{member.Nom}</td>
//                           <td>{member.Date}</td>
//                           <td>{member.Montant_cotise.toFixed(2)} €</td>
//                           <td>
//                             <div className="progress">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 style={{ width: member.Progression }}
//                                 aria-valuenow={parseInt(member.Progression)}
//                                 aria-valuemin="0"
//                                 aria-valuemax="100"
//                               >
//                                 {member.Progression}
//                               </div>
//                             </div>
//                           </td>
//                           <td>{member.Statut}</td>
//                           <td>
//                             <button
//                               className="btn btn-info btn-sm mx-1"
//                               onClick={() => this.handleAction("voir", member)}
//                             >
//                               Voir
//                             </button>
//                             <button
//                               className="btn btn-warning btn-sm mx-1"
//                               onClick={() =>
//                                 this.handleAction("archiver", member)
//                               }
//                             >
//                               Archiver
//                             </button>
//                             <button
//                               className="btn btn-danger btn-sm mx-1"
//                               onClick={() =>
//                                 this.handleAction("bloquer", member)
//                               }
//                             >
//                               Bloquer
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Pagination */}
//         <Pagination
//           pageCount={Math.ceil(membersData.length / itemsPerPage)}
//           onPageChange={this.handlePageChange}
//         />
//       </>
//     );
//   }
// }

// export default Utilisateurs;

import { Component } from "react";
// import Nav from "./nav";
import Data from "../Data/DB.json"; 
import Pagination from "./Pagination";


class Utilisateurs extends Component {
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

  handleAction = (action, member) => {
    console.log(action, member);
  };

  render() {
    const { membersData, currentPage, itemsPerPage } = this.state;
    const offset = currentPage * itemsPerPage;
    const currentMembers = membersData.slice(offset, offset + itemsPerPage);

    return (
      <>
        <div className="shadow-lg d-flex justify-content-between">
          <span className="fw-semibold fs-5">Utilisateurs</span>
          {/* <Nav /> */}
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
          <div className="row">
            <div className="col-12">
              <div className="card shadow border border-0">
                <div className="card-body p-0">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Membres</th>
                        <th scope="col">Date</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Progression</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMembers.map((member, index) => (
                        <tr key={index}>
                          <td>{member.Nom}</td>
                          <td>{member.Date}</td>
                          <td>{member.montant_cotise.toFixed(2)} €</td>
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
                          <td>{member.statut}</td>
                          <td>
                            <button
                              className="btn btn-info btn-sm mx-1"
                              onClick={() => this.handleAction("voir", member)}
                            >
                              Voir
                            </button>
                            <button
                              className="btn btn-warning btn-sm mx-1"
                              onClick={() =>
                                this.handleAction("archiver", member)
                              }
                            >
                              Archiver
                            </button>
                            <button
                              className="btn btn-danger btn-sm mx-1"
                              onClick={() =>
                                this.handleAction("bloquer", member)
                              }
                            >
                              Bloquer
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
        </div>

        {/* Pagination */}
        <Pagination
          pageCount={Math.ceil(membersData.length / itemsPerPage)}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Utilisateurs;
