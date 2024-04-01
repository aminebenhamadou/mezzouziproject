import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleUser } from '../Models/SimpleUser'; // Assurez-vous d'importer le modèle SimpleUser approprié

@Injectable({
  providedIn: 'root'
})
export class SimpleUserService {

  private baseUrl = 'http://127.0.0.1:8000/api/simpleUsers'; // Remplacez cela par l'URL de votre API Laravel pour les utilisateurs simples

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les utilisateurs simples
  getSimpleUsers(): Observable<SimpleUser[]> {
    return this.http.get<SimpleUser[]>(this.baseUrl);
  }

  // Méthode pour créer un nouvel utilisateur simple
  createSimpleUser(user: SimpleUser): Observable<SimpleUser> {
    return this.http.post<SimpleUser>(this.baseUrl, user);
  }

  // Méthode pour récupérer un utilisateur simple par son identifiant
  getSimpleUser(id: number): Observable<SimpleUser> {
    return this.http.get<SimpleUser>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un utilisateur simple existant
  updateSimpleUser(id: number, user: SimpleUser): Observable<SimpleUser> {
    return this.http.put<SimpleUser>(`${this.baseUrl}/${id}`, user);
  }

  // Méthode pour supprimer un utilisateur simple existant
  deleteSimpleUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
