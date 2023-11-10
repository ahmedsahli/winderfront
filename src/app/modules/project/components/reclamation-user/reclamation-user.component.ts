import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/shared/services/project/reclamation.service';
import { Reclamation } from '../../../../shared/services/project/reclamation';
//import {User} from "../../../modules/auth/user";

@Component({
  selector: 'winder-reclamation-user',
  templateUrl: './reclamation-user.component.html',
  styleUrls: ['./reclamation-user.component.scss']
})
export class ReclamationUserComponent {
  reclamation: Reclamation = {} as Reclamation;
  //loggedInUser: string;

  constructor(private reclamationService: ReclamationService) {}

  addReclamation() {
    // Créez un nouvel objet Reclamation avec les propriétés nécessaires
    const newReclamation: Reclamation = {
      idRec: 0, // Vous pouvez initialiser l'idRec avec une valeur par défaut ou le laisser vide
      contenuRec: this.reclamation.contenuRec,
      type: this.reclamation.type,
      sendingDate: new Date(),
      etat: 'En attente',
      // user: null, // Vous pouvez initialiser user avec une valeur par défaut ou le laisser vide
      responses: []
    };

    // Appelez le service pour ajouter la réclamation
    this.reclamationService.addReclamations(newReclamation, localStorage.getItem('userName')).subscribe(
      () => {
        console.log(newReclamation);

        // Réinitialisez le formulaire ou effectuez toute autre action nécessaire après l'ajout de la réclamation
        this.reclamation = {} as Reclamation;
        // Affichez un message de succès ou effectuez une redirection si nécessaire
        console.log('Réclamation ajoutée avec succès !');
      },
      (error) => {
        // Gérez les erreurs d'ajout de la réclamation
        console.error("Erreur lors de l'ajout de la réclamation :", error);
      }
    );
  }

  resetForm() {
    this.reclamation = {
      idRec: 0,
      contenuRec: '',
      type: '',
      sendingDate: new Date(),
      etat: 'En attente',
      // user: null,
      responses: []
    };
  }
}
