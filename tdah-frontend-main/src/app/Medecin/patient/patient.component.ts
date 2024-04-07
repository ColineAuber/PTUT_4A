import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { Table } from 'primeng/table';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
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
    this.patientService.getListepatients().subscribe(
      (data) => {
        console.log(data)
        this.listepatients = data;
      },
      (erreur) => {
        console.error('Erreur lors du chargement de la liste des patients', erreur);
      }
    );
  }
 
  supprimerpatient(id: number) {
    // Utilisez le service patientService pour supprimer la patient par son ID
    this.patientService.supprimerpatient(id).subscribe(
      () => {
        // Rafraîchissez la liste après la suppression
        this.chargerListepatients();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression de la patient', erreur);
      }
    );
  }
  redirigerVersModification(id: number) {
    this.router.navigate(['/modifierpatients', id]);
    RouterEvent
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


  
}




