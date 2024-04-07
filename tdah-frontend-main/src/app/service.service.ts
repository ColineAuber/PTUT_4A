import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://127.0.0.1:5000/api';
 


  constructor(private http: HttpClient) { }

  ajouterMedecin(nom: string, prenom: string, dateNaissance: string, etat: string, email: string , password: string) : Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
  
    const medecinData = { nom,prenom,dateNaissance,etat,email,password};
    return this.http.post(`${this.apiUrl}/users`, medecinData , {headers}); // Assurez-vous que votre API a une route appropriée
  }
  getListeMedecins(): Observable<any[]> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/users`, { headers });
  }

  modifierMedecin(id: number, medecinData: any): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/me/${id}`;
    return this.http.put(url, medecinData, { headers });
  }
  supprimerMedecin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  // hedha mtaa acceuil medecin
  getDonnees(): Observable<any[]> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`  });
    return this.http.get<any[]>(`${this.apiUrl}/resultat_journaliers`, { headers });
  }

  // Méthode pour récupérer la liste des montres
  getListeMontres(): Observable<any[]> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/montres`, { headers });
  }

  // Méthode pour supprimer une montre par son ID
  supprimerMontre(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/montres/${id}`);
  }
  modifierMontre(montreId: number, montreData: any): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/montres/${montreId}`;
    return this.http.put(url, montreData, { headers });
  }
  getMontre(montreId: number): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/montres/${montreId}`;
    return this.http.get(url , { headers });
  }
  getListepatients(): Observable<any[]> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/patients`, { headers });
  }

  // Méthode pour supprimer une patient par son ID
  supprimerpatient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/patients/${id}`);
  }
  modifierpatient(patientId: number, patientData: any): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/patients/${patientId}`;
    return this.http.put(url, patientData, { headers });
  }
  getpatient(patientId: number): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/patients/${patientId}`;
    return this.http.get(url, { headers });
  }
  getdonnee_collectes(patientId: number): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/donnee_collectees/${patientId}`;
    return this.http.get(url, { headers });
  }
  getdonnee_collectees(): Observable<any[]> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/donnee_collectees`, { headers });
  }
  getmedecin(medecinId: number): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/users/${medecinId}`;
    return this.http.get(url, { headers });
  }
  telechargerExcel(contenu: string): Observable<Blob> {
    return this.http.post<Blob>('/api/telecharger-excel', { contenu }, { responseType: 'blob' as 'json' });
  }

  getDonneesByIdprofil(): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/me`;
    return this.http.get(url, { headers });
  }

  modifierDonneesprofil(donnees: any): Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
    const url = `${this.apiUrl}/me`;
    return this.http.put(url, donnees, { headers });
  }





  ajouterpatient(nom: string, prenom: string, dateNaissance: string, etat: string, classe: string , poids: string , taille:string) : Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
  
    const medecinData = {nom,prenom,dateNaissance,etat,classe,poids,taille};
    return this.http.post(`${this.apiUrl}/patients`, medecinData , {headers}); // Assurez-vous que votre API a une route appropriée
  }
  ajoutermontre(montre : string , debut: string, fin: string, etat: string, marque: string, patient_id: string ) : Observable<any> {
    const jeton = localStorage.getItem('jeton');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jeton}`
    });
  
    const medecinData = {montre,debut,fin,etat,marque,patient_id};
    return this.http.post(`${this.apiUrl}/montres`, medecinData , {headers}); // Assurez-vous que votre API a une route appropriée
  }

  
}
