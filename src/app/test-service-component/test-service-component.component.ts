import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../Services/categorie.service'; // Importez le service CategorieService
import { SousCategorieService } from '../Services/souscategorie.service'; // Importez le service SousCategorieService
// Importez d'autres services si nécessaire

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service-component.component.html',
  styleUrls: ['./test-service-component.component.css']
})
export class TestServiceComponent implements OnInit {
  // Déclarez les variables nécessaires pour stocker les données provenant des services
  categories: any[] = [];
  sousCategories: any[] = [];

  // Injectez les services dans le constructeur
  constructor(private categorieService: CategorieService, private sousCategorieService: SousCategorieService) { }

  ngOnInit(): void {
    // Appelez les méthodes des services pour récupérer les données lors de l'initialisation du composant
    this.getAllCategories();
    this.getAllSousCategories();
  }

  // Définissez des méthodes pour appeler les méthodes des services
  getAllCategories() {
    this.categorieService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data; // Stockez les données récupérées dans la variable categories
      },
      error => {
        console.log(error); // Gérez les erreurs si nécessaire
      }
    );
  }

  getAllSousCategories() {
    this.sousCategorieService.getSousCategories().subscribe(
      (data: any[]) => {
        this.sousCategories = data; // Stockez les données récupérées dans la variable sousCategories
      },
      error => {
        console.log(error); // Gérez les erreurs si nécessaire
      }
    );
  }
}
