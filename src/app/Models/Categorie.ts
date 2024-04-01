import { SousCategorie } from "./Souscategorie";

export interface Categorie {
    id: number;
    image: string;
    Designation: string;
    scategories: SousCategorie[]; 
}
