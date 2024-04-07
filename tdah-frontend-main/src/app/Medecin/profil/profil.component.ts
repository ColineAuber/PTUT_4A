import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  modificationForm: FormGroup; // Formulaire de modification
  id: number; // ID de l'élément à modifier

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.modificationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      etat: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
      old_password: ['test'],
    });

    this.chargerDonneesAModifier();
  }

  chargerDonneesAModifier() {
    // Utilisez le service pour récupérer les données à modifier par ID
    this.service.getDonneesByIdprofil().subscribe(
      (data) => {
        console.log(data)
        // Mettez à jour les champs du formulaire avec les données récupérées
        this.modificationForm.patchValue({
          nom: data.nom,
          prenom: data.prenom,
          dateNaissance: data.dateNaissance,
          email: data.email,
          password: data.password,
          etat: data.etat
          
        
         
        

        });
      },
      (erreur) => {
        console.error('Erreur lors du chargement des données à modifier', erreur);
      }
    );
  }

  onSubmit() {
    // Soumettez les données modifiées à votre service pour mise à jour
    const formData = this.modificationForm.value;
    this.service.modifierDonneesprofil(formData).subscribe(
      () => {
        console.log('Données mises à jour avec succès');
        // Redirigez l'utilisateur vers une autre page ou laissez-le ici après la mise à jour
        this.router.navigate(['/medecin/home']);
      },
      (erreur) => {
        console.error('Erreur lors de la mise à jour des données', erreur);
      }
    );
  }

  annulerModification() {
    // Redirigez l'utilisateur vers une autre page ou laissez-le ici après l'annulation
    this.router.navigate(['/medecin/profil']);
  }

  valider() {

    console.log('Valider');
   
    this.onSubmit();
  }

 
}



