import { Login } from "./Login";

export interface Viajes{
    idViaje: number;
    user: Login;
    driver: Login;
    diaE: Date;
    direccionInicial: string;
    direccionFinal:string;
}