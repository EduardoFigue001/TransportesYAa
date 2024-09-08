import { Camiones } from "./Camiones";
import { Roles } from "./Roles";

export interface Login{
    //info user
    name: string,
    lastname: string,
    rut: string,
    //info login
    address: string,
    email: string,
    password: string,
    role:Roles,
    //info si es driver
    tipoCamion?: Camiones,
    patente?:string
    //info de los viajes
    idViajes?: number
}