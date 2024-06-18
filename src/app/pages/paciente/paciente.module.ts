import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { MenuPacienteComponent } from './menu-paciente/menu-paciente.component';


@NgModule({
  declarations: [
    //PacienteComponent,
    //MenuPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    PacienteComponent,
    MenuPacienteComponent
  ],
  exports:[
    PacienteComponent,
    MenuPacienteComponent,
    CommonModule,
    PacienteRoutingModule
  ],
})

export class PacienteModule { }