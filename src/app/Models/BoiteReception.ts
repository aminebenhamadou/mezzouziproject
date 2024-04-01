import { Utilisateur } from "./Utilisateur";

export interface BoiteReception {
    id: number;
    message: string;
    utilisateur: Utilisateur; 
}
