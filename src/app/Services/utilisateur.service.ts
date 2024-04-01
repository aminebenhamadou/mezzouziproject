import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Models/Utilisateur'; // Assurez-vous d'importer le modèle d'utilisateur approprié

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl = 'http://127.0.0.1:8000/api/utilisateur'; // Remplacez cela par l'URL de votre API Laravel pour les utilisateurs

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les utilisateurs
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.baseUrl);
  }

  // Méthode pour créer un nouvel utilisateur
  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.baseUrl, utilisateur);
  }

  // Méthode pour récupérer un utilisateur par son identifiant
  getUtilisateur(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un utilisateur existant
  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.baseUrl}/${id}`, utilisateur);
  }

  // Méthode pour supprimer un utilisateur existant
  deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
