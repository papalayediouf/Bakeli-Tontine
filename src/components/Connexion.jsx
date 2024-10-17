import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupérer les données de l'utilisateur depuis le localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Vérifier les informations d'identification
    if (userData && userData.email === email && userData.motDePasse === motDePasse) {
      alert("Connexion réussie !");
      // Rediriger vers l'application (par exemple, le tableau de bord)
      navigate("/dashboard"); // Assurez-vous que c'est la bonne route
    } else {
      alert("Identifiants incorrects, veuillez réessayer.");
    }
  };

  return (
    <>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          placeholder="Mot de passe"
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      
      <p>
        Pas encore de compte ? <button onClick={() => navigate("/")} >Inscrivez-vous ici</button>
      </p>
    </>
  );
}
