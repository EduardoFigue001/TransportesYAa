import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //creamos la estructura que vamos a consumir luego.
  //Como aún no ocupamos BD, entonces la llenamos con datos a mano.
  private loginService: Login[] = [
    {
    user: "administrador",
    password: "administrador1",
    role: {
      admin: true,
      user: false,
      driver: false
    }
  },
  {
    user: "usuario",
    password: "usuario1",
    role: {
      admin: false,
      user: true,
      driver: false
    }
  },
  {
    user: "conductor",
    password: "conductor1",
    role: {
      admin: false,
      user: false,
      driver: true
    }
  }
]
  constructor() { }

  //aquí van las funciones que competen al login

  validateLogin(login:Login){
    for(let i=0;i<this.loginService.length;i++){
      if(this.loginService[i].user == login.user && this.loginService[i].password == login.password){
        //con estas tres líneas, copiamos la info del rol y la setteamos según se condice en el servicio con el user y pass.
        login.role.admin = this.loginService[i].role.admin;
        login.role.driver = this.loginService[i].role.driver;
        login.role.user = this.loginService[i].role.user;
        return true;
      }
    }
    return false;
  }
}
