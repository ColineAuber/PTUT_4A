import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  login(username: string, password: string): void {
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic dGVzdDp0ZXN0'
    });

    // Configuration de la requête fetch
    const requestOptions: RequestInit = {
      method: 'POST',
      headers,
      body: null
    };

    // Appel à l'API pour obtenir le jeton
    fetch("http://127.0.0.1:5000/api/tokens", requestOptions)
      .then(response => response.json())
      .then(data => {
        const jeton = data.access_token;
        console.log(data)
        // Stocker le jeton dans le local storage
        localStorage.setItem('jeton', jeton);

        // Vous pouvez également émettre d'autres informations si nécessaire
        //console.log('Jeton récupéré avec succès:', jeton);
        if (username === 'admin' && password === 'admin') {
          this.router.navigate(['/superAdmin/dashbord']);
         
          return;
        } else {
        this.router.navigate(['/medecin/home']);}
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du jeton:', error);
      });
  }
}
