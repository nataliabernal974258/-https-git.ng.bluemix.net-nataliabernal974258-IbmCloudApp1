
import {Injectable} from '@angular/core';

@Injectable()
export class OperationService {

    private operation: any[] =[
        {
            nombre: "Natalia",
            empresa:"Aos",
            nacimiento:"10-10-2010"            
        },
        {
            nombre: "Lina",
            empresa:"Asis",
            nacimiento:"18-20-2020"            
        }, 
        {
            nombre: "Ana",
            empresa:"Asis",
            nacimiento:"07-01-2001"            
        },
        {
            nombre: "Maria",
            empresa:"Aos",
            nacimiento:"08-05-1981"            
        }
    ]
    constructor(){
        console.log("Servicio Listo para usar");
    }

    getData = this.operation;
}