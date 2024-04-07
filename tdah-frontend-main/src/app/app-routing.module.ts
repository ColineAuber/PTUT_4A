import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Medecin/acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { MontresComponent } from './Medecin/montres/montres.component';
import { PatientComponent } from './Medecin/patient/patient.component';
import { TelechargerComponent } from './Medecin/telecharger/telecharger.component';
import { RootMedecinComponent } from './Medecin/root-medecin/root-medecin.component';
import { ProfilComponent } from './Medecin/profil/profil.component';
import { RootSuperAdminComponent } from './superAdmin/root-super-admin/root-super-admin.component';
import { DashbordComponent } from './superAdmin/dashbord/dashbord.component';
import { AjouterMedecinComponent } from './superAdmin/ajouter-medecin/ajouter-medecin.component';
import { ModifierMedecinComponent } from './superAdmin/modifier-medecin/modifier-medecin.component';
import { ModifierpatientComponent } from './Medecin/modifierpatient/modifierpatient.component';
import { AjoutermontreComponent } from './Medecin/ajoutermontre/ajoutermontre.component';
import { AjouterpatientComponent } from './Medecin/ajouterpatient/ajouterpatient.component';
import { ModifiermontresComponent } from './Medecin/modifiermontres/modifiermontres.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent   },
 



  { path: 'medecin',component:RootMedecinComponent, 
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AcceuilComponent  },
    { path: 'montres', component:MontresComponent   },
    { path: 'patient', component: PatientComponent },
    { path: 'telecharger', component: TelechargerComponent   },
    { path: 'profil', component: ProfilComponent   },
    { path: 'modifierpatients/:id', component: ModifierpatientComponent},
    { path: 'ajoutermontre', component: AjoutermontreComponent   },
    { path: 'ajouterpatient', component:AjouterpatientComponent   },
    { path: 'modifiermontre/:id', component: ModifiermontresComponent},
            ] 
},



{ path: 'superAdmin',component:RootSuperAdminComponent, 
children: [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: 'dashbord', component: DashbordComponent  },
  { path: 'ajouterMedecin', component: AjouterMedecinComponent },
  { path: 'modifierMedecin/:id', component: ModifierMedecinComponent},

 
  
  
          ] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
