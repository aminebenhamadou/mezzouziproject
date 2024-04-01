import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profil } from '../Models/Profil'; // Assurez-vous d'importer le modèle de profil approprié

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl = 'http://127.0.0.1:8000/api/profil'; // Remplacez cela par l'URL de votre API Laravel pour les profils

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les profils
  getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.baseUrl);
  }

  // Méthode pour créer un nouveau profil
  createProfil(profil: Profil): Observable<Profil> {
    return this.http.post<Profil>(this.baseUrl, profil);
  }

  // Méthode pour récupérer un profil par son identifiant
  getProfil(id: number): Observable<Profil> {
    return this.http.get<Profil>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un profil existant
  updateProfil(id: number, profil: Profil): Observable<Profil> {
    return this.http.put<Profil>(`${this.baseUrl}/${id}`, profil);
  }

  // Méthode pour supprimer un profil existant
  deleteProfil(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
