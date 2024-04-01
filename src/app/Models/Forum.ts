import { Utilisateur } from "./Utilisateur";
import { Annance } from "./Annance"; // Assurez-vous d'importer le modèle Annance approprié

export interface Forum {
    id: number;
    titre: string;
    utilisateurs: Utilisateur[]; // Utilisateurs au pluriel, car c'est une relation hasMany
    annances: Annance[]; // Annances au pluriel, car c'est une relation hasMany
}
