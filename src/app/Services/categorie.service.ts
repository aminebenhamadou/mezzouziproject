import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../Models/Categorie'; // Assurez-vous d'importer le modèle de catégorie approprié

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'http://127.0.0.1:8000/api/categories'; // Remplacez cela par l'URL de votre API Laravel

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les catégories
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.baseUrl);
  }

  // Méthode pour créer une nouvelle catégorie
  createCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.baseUrl, categorie);
  }

  // Méthode pour récupérer une catégorie par son identifiant
  getCategorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour une catégorie existante
  updateCategorie(id: number, categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.baseUrl}/${id}`, categorie);
  }

  // Méthode pour supprimer une catégorie existante
  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
