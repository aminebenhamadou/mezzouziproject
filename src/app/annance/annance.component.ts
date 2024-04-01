import { Component, OnInit } from '@angular/core';
import { Annance } from '../Models/Annance';
import { AnnanceService } from '../Services/annance.service';
import { Utilisateur } from '../Models/Utilisateur';
import { SousCategorie } from '../Models/Souscategorie';
import { UtilisateurService } from '../Services/utilisateur.service';
import { SousCategorieService } from '../Services/souscategorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annance',
  templateUrl: './annance.component.html',
  styleUrls: ['./annance.component.css']
})
export class AnnanceComponent implements OnInit {
  newAnnance: Annance = { 
    id: 0, 
    titre: '', 
    contenu: '',
    datecreation: '', // Initialiser avec une date par défaut
    utilisateur_id: 0,
    scategorieID: 0,
    utilisateur: {} as Utilisateur, 
    sousCategorie: {} as SousCategorie, 
  };

  utilisateurs: Utilisateur[] = [];
  sousCategories: SousCategorie[] = [];

  constructor(
    private annanceService: AnnanceService,
    private utilisateurService: UtilisateurService,
    private sousCategorieService: SousCategorieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUtilisateurs();
    this.loadSousCategories();
  }

  loadUtilisateurs() {
    this.utilisateurService.getUtilisateurs().subscribe(
      (utilisateurs: Utilisateur[]) => {
        this.utilisateurs = utilisateurs;
      },
      (error) => {
        console.error('Error loading utilisateurs:', error);
      }
    );
  }

  loadSousCategories() {
    this.sousCategorieService.getSousCategories().subscribe(
      (sousCategories: SousCategorie[]) => {
        this.sousCategories = sousCategories;
      },
      (error) => {
        console.error('Error loading sousCategories:', error);
      }
    );
  }

  createAnnance(): void {
    // Convertir la chaîne de caractères en objet Date avant de créer l'annonce
    
    this.annanceService.createAnnance(this.newAnnance).subscribe(
      (createdAnnance: Annance) => {
        console.log('Annance created successfully:', createdAnnance);
        this.newAnnance = {
          id: 0,
          titre: '', 
          contenu: '',
          datecreation: '', // Réinitialiser avec une date par défaut
          utilisateur_id: 0,
          scategorieID: 0,
          utilisateur: {} as Utilisateur, 
          sousCategorie: {} as SousCategorie, 
        };
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error creating annance:', error);
      }
    );
  }
}
