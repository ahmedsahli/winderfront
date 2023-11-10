import {Component, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';
import { ReclamationService } from 'src/app/shared/services/project/reclamation.service';
import {Reclamation} from "../../../shared/services/project/reclamation";
import {ResponseService} from "../../../shared/services/project/response.service";
import {Response} from "../../../shared/services/project/response";
import {MessageService} from "primeng/api";

@Component({
  selector: 'winder-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss'],
  providers: [MessageService],
})
export class ReclamationComponent implements OnInit{

  reclamation!: Reclamation;
  reclamations: Reclamation[] = [];
  responses: Response[] = [];
  aujourdhuiReclamations: number = 0;

  constructor(private reclamationService: ReclamationService,private responseService: ResponseService,private messageService: MessageService) {}

  ngOnInit() {
    this.getReclamations();
    this.getNombresReclamationAujourdhui();


  }

  getNombresReclamationAujourdhui() {
    this.reclamationService.nombresReclamationAujourdhui()
      .subscribe(
        nombre => {
          this.aujourdhuiReclamations = nombre;
        },
        error => {
          // Gérer l'erreur de récupération du nombre de réclamations
        }
      );
  }

  getReclamationResponsess(reclamationId: number): Response[] {
    if (this.responses && this.reclamation) {
      return this.responses.filter(response => response.reclamation.idRec === reclamationId);
    }
    return [];
  }


  getReclamations(): void {
    this.reclamationService.listReclamations()
      .subscribe(res=>{
        this.reclamations = res

        console.log(res)

      })


  }
  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id)
      .subscribe(() => {
        this.getNombresReclamationAujourdhui();
        this.messageService.add({ severity: 'error', summary: 'Supprission Avec Succeé', detail: 'Reclamation supprimé avec succès' });
        // Réclamation supprimée avec succès, effectuez les actions nécessaires (par exemple, actualisez la liste des réclamations)
        this.getReclamations();
      });
  }




  exportPdf() {
    //import('jspdf').then((jsPDF) => {
    // import('jspdf-autotable').then((x) => {
    //  const doc = new jsPDF.default('p', 'px', 'a4');
    // (doc as any).autoTable(this.exportColumns, this.products);
    //   doc.save('products.pdf');
    // });
    //  });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      // const worksheet = xlsx.utils.json_to_sheet();
      //  const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      // const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      // this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
