import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-medecin',
  templateUrl: './modifier-medecin.component.html',
  styleUrls: ['./modifier-medecin.component.css']
})
export class ModifierMedecinComponent implements OnInit {
  listeMedecins: any = [];
  medecinForm: FormGroup;  // Initialisation ajoutée
  id: number;
  constructor(
    private router: Router,
     private medecinService: ServiceService,
      private formBuilder: FormBuilder,

      private route: ActivatedRoute
      ) {
    // Initialisation de medecinForm
    this.medecinForm = this.formBuilder.group({
      // Ajoutez vos contrôles de formulaire ici
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      etat: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      this.id = idFromParams !== null ? +idFromParams : 0; // Remplacez 0 par une valeur par défaut appropriée
      if (this.id) {
        // Si un ID est présent, chargez les données de la medecin
        this.chargerDonneesmedecin();
      }
    });

  }

 
  chargerDonneesmedecin() {
    // Utilisez le service medecinService pour récupérer les données de la medecin par son ID
    this.medecinService.getmedecin(this.id).subscribe(
      (data) => {
        // Mettez à jour les champs du formulaire avec les données récupérées
        console.log(data)
        this.medecinForm.patchValue({
          nom: data.nom,
          prenom: data.prenom,
          dateNaissance: data.dateNaissance,
          etat: data.etat,
          email: data. email,
          password: data.password
      


      
        });
      },
      (erreur) => {
        console.error('Erreur lors du chargement des données de la medecin', erreur);
      }
    );
  }

  onSubmit() {
    // Soumettez les données modifiées à votre service medecinService pour mise à jour
    const formData = this.medecinForm.value;
    console.log("formData: ", formData)
     this.medecinService.modifierMedecin(this.id, formData).subscribe(
       () => {
         console.log('Données de la medecin mises à jour avec succès');
         // Redirigez l'utilisateur vers la liste des medecins ou une autre page après la mise à jour
         this.router.navigate(['/superAdmin/dashbord']);
       },
       (erreur) => {
         console.error('', erreur);
         this.router.navigate(['/login']);
       }
     );
  }
}
