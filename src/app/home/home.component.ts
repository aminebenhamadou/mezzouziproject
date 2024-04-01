// home.component.ts

import { Component, OnInit } from '@angular/core';
import { AnnanceService } from '../Services/annance.service';
import { UtilisateurService } from '../Services/utilisateur.service'; 
import { Annance } from '../Models/Annance';
import { Utilisateur } from '../Models/Utilisateur'; // Importez le modèle Utilisateur
import { MatDialog } from '@angular/material/dialog'; // Importez MatDialog
import { AnnanceStateService } from '../Services/annance-state.service'; // Importer le service AnnanceStateService
import { SousCategorieService } from '../Services/souscategorie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  annances: Annance[] = [];
  newAnnance: Annance = {} as Annance; // Définissez une nouvelle annonce

  constructor(
    private annanceService: AnnanceService,
    private annanceStateService: AnnanceStateService,
    private utilisateurService: UtilisateurService,
    private sousCategorieService: SousCategorieService,
    private dialog: MatDialog // Injectez MatDialog
  ) { }

  ngOnInit(): void {
    this.loadAnnances();
    this.annanceStateService.getIsOpen().subscribe((isOpen: boolean) => {
      if (isOpen) {
        this.loadAnnances(); // Recharger les annonces lorsque l'état change pour indiquer qu'une annonce a été créée
      }
    });
  }
  

  loadAnnances() {
    this.annanceService.getAnnances().subscribe(annances => {

      this.annances = annances.map(annance => {
        this.utilisateurService.getUtilisateur(annance.utilisateur_id).subscribe(user => {
          annance.utilisateur = user;
        });
        this.sousCategorieService.getSousCategorie(annance.scategorieID).subscribe(souscategorie => {
          annance.sousCategorie = souscategorie;
        });
        return annance;
      });
    });
  }
  

  // Méthode pour afficher les détails de l'annonce lorsque le modal est ouvert
  openCreateStatusModal() {
    // Réinitialiser les détails de la nouvelle annonce
    this.newAnnance = {} as Annance;
    // Ouvrir le modal ici
  }

  // Méthode pour créer une nouvelle annonce
  createAnnance() {
    // Envoyer la nouvelle annonce au service
    // Réinitialiser les détails de la nouvelle annonce
    this.newAnnance = {} as Annance;
  }
  openAnnanceComponent() {
    this.annanceStateService.setIsOpen(true); // Définir l'état du composant AnnanceComponent comme ouvert
  }
}
