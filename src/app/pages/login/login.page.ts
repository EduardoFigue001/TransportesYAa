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
    user: "",
    password: "",
    role: {
      admin:false,
      driver: false,
      user: false
    }
  }
  constructor(private _user:LoginService, private router:Router) { }

  ngOnInit() {
  }
  /*Función que llama a la validación en el servicio*/
  login(login:Login){
    if(this._user.validateLogin(login)){
      //se envia la info a la sgte página

    }
    else console.info("error de autenticación");
  }

}
