import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbarsuperadmin',
  templateUrl: './navbarsuperadmin.component.html',
  styleUrls: ['./navbarsuperadmin.component.css']
})
export class NavbarsuperadminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logout(): void {

    localStorage.removeItem('jeton');
    this.router.navigate(['/login']);
  }
}
