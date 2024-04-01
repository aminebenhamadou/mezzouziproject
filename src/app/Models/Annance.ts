import { Utilisateur } from './Utilisateur';
import { SousCategorie } from './Souscategorie';

// Modèle Annance
export interface Annance {
    id: number;
    titre: string;
    contenu: string;
    datecreation: string;
    utilisateur_id: number;
    scategorieID: number;
    utilisateur: Utilisateur;
    sousCategorie: SousCategorie;
  }
  