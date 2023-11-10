import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../../../../shared/services/project/reclamation';
import { ReclamationService } from '../../../../shared/services/project/reclamation.service';

@Component({
  selector: 'winder-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.scss']
})
export class ListeReclamationComponent implements OnInit {
  reclamations!: Reclamation[];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.getReclamationsByUser();
  }

  getReclamationsByUser(): void {
    // Récupérer les réclamations de l'utilisateur (utilisez votre propre méthode pour obtenir l'ID de l'utilisateur actuel)
    const userId = 1; // Remplacez par votre propre logique pour obtenir l'ID de l'utilisateur
    this.reclamationService.getReclamationsByUser(localStorage.getItem('userName')).subscribe(
      (reclamations) => {
        this.reclamations = reclamations;
      },
      (error) => {
        console.error('Erreur lors de la récupération des réclamations :', error);
      }
    );
  }

  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe(() => {
      // Réclamation supprimée avec succès, effectuez les actions nécessaires (par exemple, actualisez la liste des réclamations)
      this.getReclamationsByUser();
    });
  }
}
