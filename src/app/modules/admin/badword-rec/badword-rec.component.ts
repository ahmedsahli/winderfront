import {Component, OnInit} from '@angular/core';
import {DictionnaireBadWords} from "../../../shared/services/project/DictionnaireBadWords";
import {DictionnaireBadWordsService} from "../../../shared/services/project/dictionnaire-bad-words.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'winder-badword-rec',
  templateUrl: './badword-rec.component.html',
  styleUrls: ['./badword-rec.component.scss'],
  providers: [MessageService]

})
export class BadwordRecComponent implements OnInit{

  badWords: DictionnaireBadWords[] = [];

  constructor(private badWordService: DictionnaireBadWordsService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getBadWords();
  }




  getBadWords(): void {
    this.badWordService.getBadWords().subscribe(
      (badWords) => {
        this.badWords = badWords;
      },
      (error) => {
        console.error('Erreur lors de la récupération des mots interdits :', error);
      }
    );
  }

  deleteBadWord(id: number): void {
    this.badWordService.deleteBadWord(id).subscribe(
      () => {
        // Actualiser la liste des mots interdits après la suppression
        this.getBadWords();
        this.messageService.add({ severity: 'error', summary: 'Supprission Avec Succeé', detail: 'Mot interdit supprimé avec succès' });

        console.log('Mot interdit supprimé avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la suppression du mot interdit :', error);
      }
    );
  }

  /*addBadWord(): void {
    const newBadWord: DictionnaireBadWords = {
      id: 0, // L'ID sera généré automatiquement côté serveur
      word: 'Nouveau mot interdit' // Remplacez par la valeur saisie dans le formulaire
    };

    this.badWordService.addBadWord(newBadWord).subscribe(
      (response) => {
        // Le mot interdit a été ajouté avec succès
        // Actualiser la liste des mots interdits après l'ajout
        this.getBadWords();
        console.log('Mot interdit ajouté avec succès !');
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du mot interdit :', error);
      }
    );
  } */

  updateBadWord(id: number,badWord: DictionnaireBadWords): void {
    this.badWordService.updateBadWord(id,badWord).subscribe(
      (response) => {
        // Le mot interdit a été modifié avec succès
        console.log('Mot interdit modifié avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la modification du mot interdit :', error);
      }
    );
  }



}
