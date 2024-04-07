import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './Medecin/acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { MontresComponent } from './Medecin/montres/montres.component';
import { PatientComponent } from './Medecin/patient/patient.component';
import { TelechargerComponent } from './Medecin/telecharger/telecharger.component';
import { NavbarComponent } from './Medecin/navbar/navbar.component';
import { RootMedecinComponent } from './Medecin/root-medecin/root-medecin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './Medecin/profil/profil.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { RootSuperAdminComponent } from './superAdmin/root-super-admin/root-super-admin.component';
import { DashbordComponent } from './superAdmin/dashbord/dashbord.component';
import { NavbarsuperadminComponent } from './superAdmin/navbarsuperadmin/navbarsuperadmin.component';
import { AjouterMedecinComponent } from './superAdmin/ajouter-medecin/ajouter-medecin.component';
import { ModifierMedecinComponent } from './superAdmin/modifier-medecin/modifier-medecin.component';
import { ModifiermontresComponent } from './Medecin/modifiermontres/modifiermontres.component';
import { ModifierpatientComponent } from './Medecin/modifierpatient/modifierpatient.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms'; // Si 
import { ButtonModule } from 'primeng/button';
import { AjoutermontreComponent } from './Medecin/ajoutermontre/ajoutermontre.component';
import { AjouterpatientComponent } from './Medecin/ajouterpatient/ajouterpatient.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    MontresComponent,
    PatientComponent,
    TelechargerComponent,
    NavbarComponent,
    RootMedecinComponent,
    ProfilComponent,
    RootSuperAdminComponent,
    DashbordComponent,
    NavbarsuperadminComponent,
    AjouterMedecinComponent,
    ModifierMedecinComponent,
    ModifiermontresComponent,
    ModifierpatientComponent,
    AjoutermontreComponent,
    AjouterpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    CommonModule,
    TableModule,
    InputTextModule,
    TagModule,
    FormsModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
