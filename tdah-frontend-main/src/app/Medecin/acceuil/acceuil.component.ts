import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  listedata: any[] = []; // Assurez-vous que le type correspond à votre structure de données
intensiteSed: number  =0;
intensiteLeg: number  =0;
intensiteMod: number  =0;
intensiteVig: number  =0;
nbAlerte: number  =0;

dureeHorsLigne: number  =0;
dureePort: number  =0;
  constructor(private dataService: ServiceService  ,private router : Router) { }

  ngOnInit(): void {
    // Chargez les données lors de l'initialisation du composant
    this.chargerDonnees();
  }

  chargerDonnees() {

    // Utilisez le service DataService pour récupérer les données
    this.dataService.getDonnees().subscribe(
      (data) => {

        console.log(data)
        this.listedata = (data as any).data;
        for (let i =0 ; i< this.listedata.length; i++)
        {
          this.intensiteSed +=this.listedata[i].intensiteSed;
          this.intensiteLeg +=this.listedata[i].intensiteLeg;
          this.intensiteMod +=this.listedata[i].intesiteMod;
          this.intensiteVig +=this.listedata[i].intensiteVig;
          this.nbAlerte +=this.listedata[i].nbAlerte;
          this.dureeHorsLigne +=this.listedata[i].dureeHorsLigne;
          this.dureePort +=this.listedata[i].dureePort;
          
        
        }
      },
      (erreur) => {
        console.error('Erreur lors du chargement des données', erreur);
        this.router.navigate(['/login']);
      }
    );
  }
  
 

}


