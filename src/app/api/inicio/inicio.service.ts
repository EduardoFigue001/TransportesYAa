import { Viajes } from './../../models/viajes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private viajeService : Viajes[]=[
    {
      idViaje: 999999,
          user: {
            idViajes: 999999999,
            name: "9999",
            lastname: "99999",
            rut: "999999999",
            address: "av falsa 124, valparaiso",
            email: "p@gmail.com",
            password: "clave123",
            role: {
              admin: false,
              user: true,
              driver: false
            }
          },
          driver: {
            idViajes: 1,
            name: "99999999",
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
          },
          diaE: "23-1-2025",
          direccionInicial: "calle pulenta 123,valpo",
          direccionFinal:"segunda calle 456,quilpue"
        },
    {
    idViaje: 1,
    user: {
      idViajes: 1,
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
    driver: {
      idViajes: 1,
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
    },
    diaE: "23-1-2025",
    direccionInicial: "calle pulenta 123,valpo",
    direccionFinal:"segunda calle 456,quilpue"
}
]

  constructor() { }

  //funciones para mostrar los viajes. 

  //devuelve un viaje en particular asociado al id del viaje.
  getViaje(id:number){
    for(let i=0; i<this.viajeService.length;i++){
      if(id == this.viajeService[i].idViaje){
        console.info("viajes iguales ",id," ",this.viajeService[i].idViaje)
        return this.viajeService[i];
      }
    }
    return this.viajeService[0];
    ;
  }
  //devuelve una lista de viajes asociados a una cuenta (email)
  getAllViajes(email:string){
    let viaje: Viajes[] | undefined; 
    for(let i=0;i<this.viajeService.length;i++){
      if(email == this.viajeService[i].user.email){
        viaje?.push(this.viajeService[i]);
      }
    }
    return viaje;
  }
}
