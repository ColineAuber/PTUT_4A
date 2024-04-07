
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';


import { Router, RouterEvent } from '@angular/router';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  first = 0;

  rows = 10;
  listemedecins: any= []; 

  @ViewChild('dt') table: Table | undefined  // Assurez-vous que le type correspond à votre structure de données

  constructor(private router: Router, private medecinService: ServiceService) { }

  ngOnInit(): void {
    // Chargez la liste des médecins lors de l'initialisation du composant
    this.chargerListeMedecins();
  }

  chargerListeMedecins() {
    // Utilisez le service MedecinService pour récupérer la liste des médecins
    this.medecinService.getListeMedecins().subscribe(
      (data) => {
        console.log(data)
        this.listemedecins = data;
      },
      (erreur) => {
        console.error('Erreur lors du chargement de la liste des médecins', erreur);
      }
    );
  }

  redirigerVersModification(id: number) {
    this.router.navigate(['/superAdmin/modifierMedecin', id]);
  }

  supprimermedecin(id: number) {
    // Utilisez le service patientService pour supprimer la patient par son ID
    this.medecinService.supprimerMedecin(id).subscribe(
      () => {
        // Rafraîchissez la liste après la suppression
        this.chargerListeMedecins();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression de la patient', erreur);
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
    return this.listemedecins ? this.first === (this.listemedecins.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.listemedecins ? this.first === 0 : true;
}

onGlobalSearchChange(event: any): void {
 const value = event.target.value
 this.table?.filterGlobal(value, 'contains')
}


  
}



