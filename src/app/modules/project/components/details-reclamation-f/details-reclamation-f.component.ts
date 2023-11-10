import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamationService} from "../../../../shared/services/project/reclamation.service";
import {ResponseService} from "../../../../shared/services/project/response.service";
import {Reclamation} from "../../../../shared/services/project/reclamation";

@Component({
  selector: 'winder-details-reclamation-f',
  templateUrl: './details-reclamation-f.component.html',
  styleUrls: ['./details-reclamation-f.component.scss']
})
export class DetailsReclamationFComponent implements OnInit{

  reclamation!: Reclamation;
  reclamations: Reclamation[] = [];
  visible!: boolean;

  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService,
    private responseService: ResponseService, private router:Router


  ) { }

  ngOnInit(): void {
    this.getReclamationDetail();
    this.getReclamations();
    // this.getReclamationResponses();

  }
  updateReclamation() {
    this.reclamationService.updateReclamation(this.reclamation.idRec, this.reclamation)
      .subscribe(
        () => {
          // Réclamation mise à jour avec succès, effectuez les actions nécessaires
          // (par exemple, actualisez la liste des réclamations)
          this.getReclamations();
          // Réinitialisez la réclamation pour vider le formulaire
          this.reclamation = {} as Reclamation;
        },
        error => {
          // Gérer l'erreur de mise à jour de la réclamation
        }
      );
  }


  showDialog() {
    this.visible = true;
  }

  getReclamations(): void {
    this.reclamationService.listReclamations()
      .subscribe(res=>{
        this.reclamations = res

        console.log(res)

      })


  }

  getReclamationDetail(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.reclamationService.getReclamationById(id)
        .subscribe(
          reclamation => {
            this.reclamation = reclamation;
            // Autres actions à effectuer lorsque les détails de la réclamation sont récupérés
          },
          error => {
            // Gérer l'erreur de récupération des détails de la réclamation
          }
        );
    } else {
      // Gérer le cas où le paramètre 'id' n'est pas présent dans l'URL
    }
  }

}
