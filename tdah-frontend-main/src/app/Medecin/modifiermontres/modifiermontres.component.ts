import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifiermontres',
  templateUrl: './modifiermontres.component.html',
  styleUrls: ['./modifiermontres.component.css']
})
export class ModifiermontresComponent implements OnInit {

  id: number;
  montresForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private montreService: ServiceService
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire
    this.montresForm = this.formBuilder.group({
      montre: ['', Validators.required],
    debut: ['', Validators.required],
    fin: ['', Validators.required],
    marque: ['', Validators.required],
    etat: ['', Validators.required],
    patient_id: ['', [Validators.required]],
    });
  
    // Récupération de l'ID à partir de la route
    this.route.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      this.id = idFromParams !== null ? +idFromParams : 0; // Remplacez 0 par une valeur par défaut appropriée
      if (this.id) {
        // Si un ID est présent, chargez les données de la montre
        this.chargerDonneesMontre();
      }
    });
  }
  

  chargerDonneesMontre() {
    // Utilisez le service MontreService pour récupérer les données de la montre par son ID
    this.montreService.getMontre(this.id).subscribe(
      (data) => {
        // Mettez à jour les champs du formulaire avec les données récupérées
        this.montresForm.patchValue({
          
          montre: data.montre,
          debut: data.debut,
          fin: data.fin,
          marque: data.marque,
          etat: data.etat,
          patient_id: data.patient_id
        });
      },
      (erreur) => {
        console.error('Erreur lors du chargement des données de la montre', erreur);
      }
    );
  }

  onSubmit() {
    // Soumettez les données modifiées à votre service MontreService pour mise à jour
    const formData = this.montresForm.value;
    this.montreService.modifierMontre(this.id, formData).subscribe(
      () => {
        console.log('Données de la montre mises à jour avec succès');
        // Redirigez l'utilisateur vers la liste des montres ou une autre page après la mise à jour
        this.router.navigate(['/medecin/montres']);
      },
      (erreur) => {
        console.error('Erreur lors de la mise à jour des données de la montre', erreur);
      }
    );
  }


}


