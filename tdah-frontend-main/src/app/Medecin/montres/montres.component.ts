import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServiceService } from 'src/app/service.service';
import { Router, RouterEvent } from '@angular/router';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
  styleUrls: ['./montres.component.css']
})
export class MontresComponent implements OnInit {
  first = 0;

  rows = 10;
  listemontres:  any= [];  // Assurez-vous que le type correspond à votre structure de données

  @ViewChild('dt') table: Table | undefined
  constructor(private router: Router, private montreService: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // Chargez la liste des montres lors de l'initialisation du composant
    this.chargerListeMontres();
  }

  chargerListeMontres() {
    // Utilisez le service MontreService pour récupérer la liste des montres
    this.montreService.getListeMontres().subscribe(
      (data) => {
        this.listemontres = data;
        console.log(data)
      },
      (erreur) => {
        console.error('Erreur lors du chargement de la liste des montres', erreur);
        this.router.navigate(['/login']);
      }
    );
  }

  supprimerMontre(id: number) {
    // Utilisez le service MontreService pour supprimer la montre par son ID
    this.montreService.supprimerMontre(id).subscribe(
      () => {
        // Rafraîchissez la liste après la suppression
        this.chargerListeMontres();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression de la montre', erreur);
        this.router.navigate(['/login']);
      }
    );
  }
  redirigerVersModification(id: number) {
    this.router.navigate(['/modifiermontres', id]);
  }
  telechargerExcel() {
   
    const contenuExcel = this.genererContenuExcel(this.listemontres);
    //const contenuExcel = montreService.telechargerExcel(contenu : string);
    const blob = new Blob([contenuExcel], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'montres.xlsx'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
//HEDHI BKOLHA NE7IHA 
  genererContenuExcel(listeMontres: any[]): string {
    
    return 'Votre contenu Excel ici...';
  }
  downloadFile(data : any[], filename = 'data') {
    let csvData = this.ConvertToCSV(data,
        ['montre', 
         'debut',
         'fin', 
         'etat', 
         'marque',
         'patient_id']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData],
        { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') !=
        -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {

        // If Safari open in new window to
        // save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray: any[], headerList: any[]) {
    let array = typeof objArray !=
        'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    for (let index in headerList) {
        row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = (i + 1) + '';
        for (let index in headerList) {
            let head = headerList[index];
            line += ',' + array[i][head];
        }
        str += line + '\r\n';
    }
    return str;
}


  

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.listemontres ? this.first === (this.listemontres.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.listemontres ? this.first === 0 : true;
}

onGlobalSearchChange(event: any): void {
 const value = event.target.value
 this.table?.filterGlobal(value, 'contains')
}


}
