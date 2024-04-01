import { Categorie } from './Categorie';
import { Annance } from './Annance'; // Assurez-vous d'importer le modèle Annance approprié

export interface SousCategorie {
    id: number;
    nomscategorie: string;
    imagescategorie: string;
    categorie: Categorie; // Categorie au singulier, car c'est une relation BelongsTo
    annonces: Annance[]; // Annances au pluriel, car c'est une relation hasMany
}
