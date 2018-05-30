import { Component, OnInit } from '@angular/core';

import { userDto } from './../models/UserDto';
import { CommonModule } from '@angular/common';

declare var require: any;

const Swal = require('sweetalert2');

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent  {

  userArray: userDto[] = [
    { id:1, name:"nata", country: "Usa" },
    { id:2, name:"nati", country: "Colombia" }
  ];

  selectedUser: userDto = new userDto();

  AddOrEdit(){
    if( this.selectedUser.id === 0 ){
      this.userArray.push(this.selectedUser);
      this.selectedUser.id = this.userArray.length + 1;
    }
    this.selectedUser = new userDto();
  }
 
  OpenUser(user: userDto ){
    this.selectedUser = user;
  }
 
  DeleteUser( ){
 
    Swal({
      title: 'Eliminar',
      text: 'Estas seguro de eliminar el usuario?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Eliminado!',
          'Estas seguro de eliminar el usuario?',
          'success'
        )
        this.userArray = this.userArray.filter(x => x != this.selectedUser);
        this.selectedUser = new userDto();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'Se mantiene el usuario',
          'error'
        )
      }
    })

 
 
}
}

