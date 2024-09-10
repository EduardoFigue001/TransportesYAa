import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from 'src/app/api/inicio/inicio.service';
import { LoginService } from 'src/app/api/login/login.service';
import { Login } from 'src/app/models/Login';
import { Viajes } from 'src/app/models/viajes';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user?: Login|any;

  viajesControl: Viajes ={
    idViaje: 0,
    user: {
      name: "",
      lastname: "",
      rut: "",
      address: "",
      email: "",
      password: "",
      role: {
        admin: false,
        user: false,
        driver: false
      }
    },
    driver: {
      name: "",
      lastname: "",
      rut: "",
      address: "",
      email: "",
      password: "",
      role: {
        admin: false,
        user: false,
        driver: false
      },
      tipoCamion: {
        s: false,
        m:false,
        l:false,
        xl:false
      },
    patente: ""
    },
    diaE: "",
    direccionInicial: "",
    direccionFinal:""
}

  constructor(private router:Router, private _inicioService: InicioService) { }
  
  ngOnInit() {
    const navigate =this.router.getCurrentNavigation();
    const state = navigate?.extras.state!['userInfo'];
    console.info("hola",state);
    this.user = state;
    console.info("adios",this.user);
  }
  //funcion que guarda en viajesControl la info sacada desde el id de viaje del usuario 
  mostrarViaje(){
    this.viajesControl = this._inicioService.getViaje(this.user.idViajes);
    console.info("showme ", this.viajesControl)
    console.info( "y esto?  ",this._inicioService.getViaje(this.user.idViajes));
    if(this.viajesControl == undefined){
      console.info("error, no existe viaje asociado")
    }
    
    return this.viajesControl
  }
  mostrarTodo(){
    let viajesArray: Viajes[]= this._inicioService.getAllViajesAdm();
    console.info(viajesArray);
    return viajesArray;
  }
}
