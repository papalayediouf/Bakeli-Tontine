
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    profession: '',
    motDePasse: '',
    confirmMotDePasse: '',
    email: '',
    telephone: '',
    adresse: '',
    organisation: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification que les mots de passe correspondent
    if (formData.motDePasse !== formData.confirmMotDePasse) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // Sauvegarde des données dans le localStorage
    localStorage.setItem('userData', JSON.stringify({
      nom: formData.nom,
      prenom: formData.prenom,
      dateDeNaissance: formData.dateDeNaissance,
      profession: formData.profession,
      email: formData.email,
      telephone: formData.telephone,
      adresse: formData.adresse,
      organisation: formData.organisation,
      motDePasse: formData.motDePasse
    }));

    alert("Inscription réussie !");
    
    // Rediriger vers la page de connexion
    navigate("/connexion");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
        <input
          type="date"
          name="dateDeNaissance"
          value={formData.dateDeNaissance}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder="Profession"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Téléphone"
          required
        />
        <input
          type="text"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          placeholder="Adresse"
          required
        />
        <input
          type="text"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          placeholder="Organisation"
          required
        />
        <input
          type="password"
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <input
          type="password"
          name="confirmMotDePasse"
          value={formData.confirmMotDePasse}
          onChange={handleChange}
          placeholder="Confirmer mot de passe"
          required
        />
        <button type="submit">S inscrire</button>
      </form>

      <p>
        Déjà un compte ? <button onClick={() => navigate("/connexion")}>Connectez-vous ici</button>
      </p>
    </>
  );
}
