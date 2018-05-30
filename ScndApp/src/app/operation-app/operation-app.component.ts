import { OperationService } from './../Services/operacion.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operation-app',
  templateUrl: './operation-app.component.html',
  styleUrls: ['./operation-app.component.css']
})
export class OperationAppComponent implements OnInit {
  nombre: string;
  isLogged = false;
  login(){
    this.isLogged=!this.isLogged;
  }

  constructor( private _operationService: OperationService ){}
  operation: any[] = [];

  ngOnInit(){

this.operation = this._operationService.getData;
console.log(this.operation)




  }

}
