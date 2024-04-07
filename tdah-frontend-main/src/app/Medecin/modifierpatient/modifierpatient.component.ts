import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifierpatient',
  templateUrl: './modifierpatient.component.html',
  styleUrls: ['./modifierpatient.component.css']
})
export class ModifierpatientComponent implements OnInit {

  
  id: number;
  patientsForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private patientService: ServiceService
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire
    this.patientsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      datedenaissance: ['', Validators.required],
      etat: ['', Validators.required],
      classe: ['', [Validators.required ]],
      poids: ['', Validators.required]
    });
  
    // Récupération de l'ID à partir de la route
    this.route.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      this.id = idFromParams !== null ? +idFromParams : 0; // Remplacez 0 par une valeur par défaut appropriée
      if (this.id) {
        // Si un ID est présent, chargez les données de la patient
        this.chargerDonneespatient();
      }
    });
  }
  

  chargerDonneespatient() {
    // Utilisez le service patientService pour récupérer les données de la patient par son ID
    this.patientService.getpatient(this.id).subscribe(
      (data) => {
        // Mettez à jour les champs du formulaire avec les données récupérées
        console.log(data)
        this.patientsForm.patchValue({
          nom: data.nom,
          prenom: data.prenom,
          datedenaissance: data.datedenaissance,
          etat: data.etat,
          classe: data.classe,
          poids: data.poids,
          taille: data.taille


      
        });
      },
      (erreur) => {
        console.error('Erreur lors du chargement des données de la patient', erreur);
      }
    );
  }

  onSubmit() {
    // Soumettez les données modifiées à votre service patientService pour mise à jour
    const formData = this.patientsForm.value;
    console.log("formData: ", formData)
     this.patientService.modifierpatient(this.id, formData).subscribe(
       () => {
         console.log('Données de la patient mises à jour avec succès');
         // Redirigez l'utilisateur vers la liste des patients ou une autre page après la mise à jour
         this.router.navigate(['/medecin/patient']);
       },
       (erreur) => {
         console.error('Erreur lors de la mise à jour des données de la patient', erreur);
         
       }
     );
  }


}






