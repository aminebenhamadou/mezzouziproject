import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annance } from '../Models/Annance'; // Assurez-vous d'importer le modèle d'annonce approprié
import { AnnanceStateService } from './annance-state.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnanceService {

  private baseUrl = 'http://127.0.0.1:8000/api/annance'; // Remplacez cela par l'URL de votre API Laravel pour les annonces

  constructor(private http: HttpClient, private annanceStateService: AnnanceStateService) { }

  // Méthode pour récupérer toutes les annonces
  getAnnances(): Observable<Annance[]> {
    return this.http.get<Annance[]>(this.baseUrl);
    
  }
  

  // Méthode pour créer une nouvelle annonce
  createAnnance(annance: Annance): Observable<Annance> {
    return this.http.post<Annance>(this.baseUrl, annance).pipe(
      tap(() => {
        this.annanceStateService.setIsOpen(true); // Mettre à jour l'état pour indiquer qu'une annonce a été créée
      })
    );
  }

  // Méthode pour récupérer une annonce par son identifiant
  getAnnance(id: number): Observable<Annance> {
    return this.http.get<Annance>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour une annonce existante
  updateAnnance(id: number, annance: Annance): Observable<Annance> {
    return this.http.put<Annance>(`${this.baseUrl}/${id}`, annance);
  }

  // Méthode pour supprimer une annonce existante
  deleteAnnance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
