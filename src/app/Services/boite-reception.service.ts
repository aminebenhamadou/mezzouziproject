import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoiteReception } from '../Models/BoiteReception'; // Assurez-vous d'importer le modèle de boîte de réception approprié

@Injectable({
  providedIn: 'root'
})
export class BoiteReceptionService {

  private baseUrl = 'http://127.0.0.1:8000/api/BoiteReception'; // Remplacez cela par l'URL de votre API Laravel pour les boîtes de réception

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les boîtes de réception
  getBoiteReceptions(): Observable<BoiteReception[]> {
    return this.http.get<BoiteReception[]>(this.baseUrl);
  }

  // Méthode pour créer une nouvelle boîte de réception
  createBoiteReception(boiteReception: BoiteReception): Observable<BoiteReception> {
    return this.http.post<BoiteReception>(this.baseUrl, boiteReception);
  }

  // Méthode pour récupérer une boîte de réception par son identifiant
  getBoiteReception(id: number): Observable<BoiteReception> {
    return this.http.get<BoiteReception>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour une boîte de réception existante
  updateBoiteReception(id: number, boiteReception: BoiteReception): Observable<BoiteReception> {
    return this.http.put<BoiteReception>(`${this.baseUrl}/${id}`, boiteReception);
  }

  // Méthode pour supprimer une boîte de réception existante
  deleteBoiteReception(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
