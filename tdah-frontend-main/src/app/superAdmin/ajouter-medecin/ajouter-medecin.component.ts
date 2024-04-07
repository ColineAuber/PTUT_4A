import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-ajouter-medecin',
  templateUrl: './ajouter-medecin.component.html',
  styleUrls: ['./ajouter-medecin.component.css']
})
export class AjouterMedecinComponent implements OnInit {

    medecinForm: FormGroup = new FormGroup ({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      dateNaissance: new FormControl(''),
      etat:new FormControl(''),
      email: new FormControl(''), 
      password: new FormControl(''), 
    });
  
    constructor(private fb: FormBuilder, private medecinService: ServiceService , private router : Router) {
      
    }
  ngOnInit(): void {
    this.medecinForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      etat: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
     
    });
    throw new Error('Method not implemented.');
  }
 
    onSubmit()  {
      console.log ('haythem')
      //if (this.medecinForm.valid) {
 
        console.log ('haythem2')
         const nom = this.medecinForm.get('nom')!.value;
         const prenom = this.medecinForm.get('prenom')!.value;
         const dateNaissance = this.medecinForm.get('dateNaissance')!.value;
         const etat = this.medecinForm.get('etat')!.value;
         const email = this.medecinForm.get('email')!.value;
         const password = this.medecinForm.get('password')!.value;
         console.log (nom + prenom + dateNaissance + etat+ email+password)

  
        this.medecinService.ajouterMedecin(nom,prenom,dateNaissance,etat,email,password).subscribe(
          () => {
            console.log('Médecin ajouté avec succès!');
            // Réinitialiser le formulaire ou effectuer une autre action si nécessaire
            this.medecinForm.reset();
            this.router.navigate(['/superAdmin/dashbord']);
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du médecin', error);
            this.router.navigate(['/login']);
          }
        );
      //}
    }
  }
  



