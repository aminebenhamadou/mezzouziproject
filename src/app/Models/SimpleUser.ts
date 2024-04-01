import { Utilisateur } from './Utilisateur'

// Définition de la classe SimpleUser qui étend Utilisateur
export class SimpleUser implements Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    // Autres propriétés spécifiques à SimpleUser si nécessaire

    constructor(id: number, nom: string, prenom: string, email: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}
