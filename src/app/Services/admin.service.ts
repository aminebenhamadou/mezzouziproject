import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/Admin'; // Assurez-vous d'importer le modèle Admin approprié

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://127.0.0.1:8000/api/admins'; // Remplacez cela par l'URL de votre API Laravel pour les administrateurs

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les administrateurs
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }

  // Méthode pour créer un nouvel administrateur
  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.baseUrl, admin);
  }

  // Méthode pour récupérer un administrateur par son identifiant
  getAdmin(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un administrateur existant
  updateAdmin(id: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.baseUrl}/${id}`, admin);
  }

  // Méthode pour supprimer un administrateur existant
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
