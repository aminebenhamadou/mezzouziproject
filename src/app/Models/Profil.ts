import { Utilisateur } from "./Utilisateur";
import { Categorie } from "./Categorie"; // Assurez-vous d'importer le modèle Categorie approprié

export interface Profil {
    id: number;
    login: string;
    password: string; // Assurez-vous que le type correspond à la façon dont vous stockez les mots de passe
    utilisateurs: Utilisateur[]; // Utilisateurs au pluriel, car c'est une relation BelongsTo
    categories: Categorie[]; // Categories au pluriel, car c'est une relation hasMany
}
