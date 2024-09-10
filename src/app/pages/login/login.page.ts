import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/api/login/login.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Esta es la estructura que vamos a rescatar desde la vista del login y luego interactuará con el servicio
  pageLogin: Login = {
    idViajes: 0,
    name: " ",
    lastname: " ",
    rut: " ",
    address: " ",
    email: " ",
    password: " ",
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
    patente: " "
  }
  
  constructor(private _user:LoginService, private router:Router) { }

  ngOnInit() {
  }
  /*Función que llama a la validación en el servicio*/
  login(loogin:Login|any){
    if(this._user.validateLogin(loogin)){
      loogin =this._user.getUser(loogin.email,loogin.password)
      //se envia la info a la sgte página
      this.router.navigate(['inicio'],{
        state: {
          userInfo: loogin
        }
      });
    }
    else console.info("error de autenticación");
  }

}
