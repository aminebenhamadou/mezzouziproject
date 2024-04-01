import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forum } from '../Models/Forum'; // Assurez-vous d'importer le modèle de forum approprié

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl = 'http://127.0.0.1:8000/api/forum'; // Remplacez cela par l'URL de votre API Laravel pour les forums

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les forums
  getForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.baseUrl);
  }

  // Méthode pour créer un nouveau forum
  createForum(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(this.baseUrl, forum);
  }

  // Méthode pour récupérer un forum par son identifiant
  getForum(id: number): Observable<Forum> {
    return this.http.get<Forum>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un forum existant
  updateForum(id: number, forum: Forum): Observable<Forum> {
    return this.http.put<Forum>(`${this.baseUrl}/${id}`, forum);
  }

  // Méthode pour supprimer un forum existant
  deleteForum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
