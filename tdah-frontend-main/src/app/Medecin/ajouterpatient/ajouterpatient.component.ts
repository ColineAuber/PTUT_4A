import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-ajouterpatient',
  templateUrl: './ajouterpatient.component.html',
  styleUrls: ['./ajouterpatient.component.css']
})
export class AjouterpatientComponent implements OnInit {

  
  patientForm: FormGroup = new FormGroup ({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    etat:new FormControl(''),
    classe: new FormControl(''), 
    poids: new FormControl(''), 
    taille: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private patientService: ServiceService) {
    
  }
ngOnInit(): void {
  this.patientForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    etat: ['', Validators.required],
    classe: ['', [Validators.required]],
    poids: ['', [Validators.required]],
    taille : ['', [Validators.required]],
   
  });
  throw new Error('Method not implemented.');
}

  onSubmit()  {
    console.log ('haythem')
    //if (this.patientForm.valid) {

      console.log ('haythem2')
       const nom = this.patientForm.get('nom')!.value;
       const prenom = this.patientForm.get('prenom')!.value;
       const dateNaissance = this.patientForm.get('dateNaissance')!.value;
       const etat = this.patientForm.get('etat')!.value;
       const classe = this.patientForm.get('classe')!.value;
       const poids = this.patientForm.get('poids')!.value;
       const taille = this.patientForm.get('taille')!.value;
       console.log (nom + prenom + dateNaissance + etat+ classe+poids+taille)


      this.patientService.ajouterpatient(nom,prenom,dateNaissance,etat,classe,poids,taille).subscribe(
        () => {
          console.log('Médecin ajouté avec succès!');
          // Réinitialiser le formulaire ou effectuer une autre action si nécessaire
          this.patientForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du médecin', error);
        }
      );
    //}
  }

}
