import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-ajoutermontre',
  templateUrl: './ajoutermontre.component.html',
  styleUrls: ['./ajoutermontre.component.css']
})
export class AjoutermontreComponent implements OnInit {

  montreForm: FormGroup = new FormGroup ({
    montre: new FormControl(''),
    debut: new FormControl(''),
    fin: new FormControl(''),
    marque: new FormControl(''),
    etat:new FormControl(''),
    patient_id: new FormControl(''), 
    password: new FormControl(''), 
  });

  constructor(private fb: FormBuilder, private montreService: ServiceService , private router:Router) {
    
  }
ngOnInit(): void {
  this.montreForm = this.fb.group({
    montre: ['', Validators.required],
    debut: ['', Validators.required],
    fin: ['', Validators.required],
    marque: ['', Validators.required],
    etat: ['', Validators.required],
    patient_id: ['', [Validators.required]],
    
  });
  throw new Error('Method not implemented.');
}

  onSubmit()  {
    console.log ('haythem')
    //if (this.montreForm.valid) {

      console.log ('haythem2')
      const montre = this.montreForm.get('montre')!.value;
       const debut = this.montreForm.get('debut')!.value;
       const fin = this.montreForm.get('fin')!.value;
       const marque = this.montreForm.get('marque')!.value;
       const etat = this.montreForm.get('etat')!.value;
       const patient_id = this.montreForm.get('patient_id')!.value;
      
       console.log (montre+ debut + fin + marque + etat+ patient_id)


      this.montreService.ajoutermontre(montre,debut,fin,marque,etat,patient_id).subscribe(
        () => {
          console.log('Médecin ajouté avec succès!');
          // Réinitialiser le formulaire ou effectuer une autre action si nécessaire
          this.montreForm.reset();
          this.router.navigate(['/medecin/montres']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du médecin', error);
          this.router.navigate(['/login']);
        }
      );
    //}
  }

}
