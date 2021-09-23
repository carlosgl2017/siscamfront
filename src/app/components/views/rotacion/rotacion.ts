import { Dvr } from "../dvr/dvr";

export interface Rotacion {
    idrotacion?:number,
    observacion:string,
    fechaini:Date,
    fechafin:Date,
    oficinas:Oficina[],
    idusers:number,
    dvr:Dvr[],


}
