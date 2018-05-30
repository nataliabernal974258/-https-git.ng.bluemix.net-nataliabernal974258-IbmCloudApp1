import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//SweetAlert
import Swal from 'sweetalert2';

//Componentes
import { AppComponent } from './app.component';
import { UserAppComponent } from './user-app/user-app.component';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { OperationAppComponent } from './operation-app/operation-app.component';

//Servicios

import {OperationService} from './Services/operacion.services';
//Rutas
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: UserAppComponent, pathMatch:'full' },
  {path:'user', component: UserAppComponent },
  {path:'contact', component: ContactAppComponent},
  {path:'operation', component: OperationAppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserAppComponent,
    ContactAppComponent,
    OperationAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
