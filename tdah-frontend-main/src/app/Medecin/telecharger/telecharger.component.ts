import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { Table } from 'primeng/table';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-telecharger',
  templateUrl: './telecharger.component.html',
  styleUrls: ['./telecharger.component.css']
})
export class TelechargerComponent implements OnInit {

  first = 0;

  rows = 10;
  listepatients: any= []; 

  @ViewChild('dt') table: Table | undefined

  constructor(private router: Router, private patientService: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // Chargez la liste des patients lors de l'initialisation du composant
    this.chargerListepatients();
  }

  chargerListepatients() {
    // Utilisez le service patientService pour récupérer la liste des patients
    this.patientService.getdonnee_collectees().subscribe(
      (data) => {
        console.log(data)
        this.listepatients = data;
      },
      (erreur) => {
        console.error('Erreur lors du chargement de la liste des patients', erreur);
      }
    );
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
    return this.listepatients ? this.first === (this.listepatients.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.listepatients ? this.first === 0 : true;
}

onGlobalSearchChange(event: any): void {
 const value = event.target.value
 this.table?.filterGlobal(value, 'contains')
}
telechargerExcel() {
   
  const contenuExcel = this.genererContenuExcel(this.listepatients);
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

}
