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
    name: "admin",
    lastname: "admin",
    rut: "12456987-9",
    address: "av falsa 123, valparaiso",
    email: "a@gmail.com",
    password: "clave123",
    role: {
      admin: true,
      user: false,
      driver: false
    }
    
  },
  {
    name: "pasajero",
    lastname: "pasajero",
    rut: "12416987-9",
    address: "av falsa 124, valparaiso",
    email: "p@gmail.com",
    password: "clave123",
    role: {
      admin: false,
      user: true,
      driver: false
    }
  },
  {
    name: "conductor",
    lastname: "conductor",
    rut: "12452387-9",
    address: "av falsa 125, valparaiso",
    email: "c@gmail.com",
    password: "clave123",
    role: {
      admin: false,
      user: false,
      driver: true
    },
    tipoCamion: {
      s: false,
      m:false,
      l:false,
      xl:true
    },
    patente: "ickkck-69"
  }
]
  constructor() { }

  //aquí van las funciones que competen al login

  validateLogin(login:Login){
    for(let i=0;i<this.loginService.length;i++){
      if(this.loginService[i].email == login.email && this.loginService[i].password == login.password){
        //con estas tres líneas, copiamos la info del rol y la setteamos según se condice en el servicio con el user y pass.
        login = this.loginService[i];
        /*if(login.role.driver){
          login.tipoCamion = this.loginService[i].tipoCamion;
        }*/
        console.info("succes");
        return true;
      }
    }
    return false;
  }
  getUser(email:string,password:string){
    for(let i=0;i<this.loginService.length;i++){
      if(this.loginService[i].email == email && this.loginService[i].password == password){
        return this.loginService[i];
      }
    }
    return null
  }
}
