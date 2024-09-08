import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user?: Login|any;

  constructor(private router:Router) { }
  
  ngOnInit() {
    const navigate =this.router.getCurrentNavigation();
    const state = navigate?.extras.state!['userInfo'];
    console.info("hola",state);
    this.user = state;
    console.info("adios",this.user);
  }
  
}
