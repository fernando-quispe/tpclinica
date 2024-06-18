import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SeccionUsuarioComponent } from './seccion-usuario/seccion-usuario.component';
import { AdminComponent } from './admin.component';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  declarations: [
    //SeccionUsuarioComponent,
    //AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentesModule,

    SeccionUsuarioComponent,
    AdminComponent
  ],
  exports: [
    SeccionUsuarioComponent,
    AdminComponent
  ]
})

export class AdminModule { }