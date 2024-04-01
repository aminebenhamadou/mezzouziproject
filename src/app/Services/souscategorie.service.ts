import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousCategorie } from '../Models/Souscategorie'; // Assurez-vous d'importer le modèle de sous-catégorie approprié

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  private baseUrl = 'http://127.0.0.1:8000/api/scategories'; // Remplacez cela par l'URL de votre API Laravel pour les sous-catégories

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les sous-catégories
  getSousCategories(): Observable<SousCategorie[]> {
    return this.http.get<SousCategorie[]>(this.baseUrl);
  }

  // Méthode pour créer une nouvelle sous-catégorie
  createSousCategorie(sousCategorie: SousCategorie): Observable<SousCategorie> {
    return this.http.post<SousCategorie>(this.baseUrl, sousCategorie);
  }

  // Méthode pour récupérer une sous-catégorie par son identifiant
  getSousCategorie(id: number): Observable<SousCategorie> {
    return this.http.get<SousCategorie>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour une sous-catégorie existante
  updateSousCategorie(id: number, sousCategorie: SousCategorie): Observable<SousCategorie> {
    return this.http.put<SousCategorie>(`${this.baseUrl}/${id}`, sousCategorie);
  }

  // Méthode pour supprimer une sous-catégorie existante
  deleteSousCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Méthode pour récupérer toutes les sous-catégories d'une catégorie spécifique
  getSousCategoriesByCategorie(categorieId: number): Observable<SousCategorie[]> {
    return this.http.get<SousCategorie[]>(`${this.baseUrl}/bycategorie/${categorieId}`);
  }
}
