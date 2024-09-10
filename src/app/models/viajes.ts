import { Login } from "./Login";

export interface Viajes{
    idViaje: number;
    user: Login;
    driver: Login;
    diaE: string;
    direccionInicial: string;
    direccionFinal:string;
}