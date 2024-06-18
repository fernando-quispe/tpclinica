import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente.component';
import { MiPerfilComponent } from '../../componentes/mi-perfil/mi-perfil.component';
import { MisTurnosComponent } from '../../componentes/mis-turnos/mis-turnos.component';
import { TurnoSolicitarComponent } from '../../componentes/turno-solicitar/turno-solicitar.component';

const routes: Routes = [
  { path: '', component: PacienteComponent, children: [
      { path: '', component: MiPerfilComponent },
      { path: 'mi-perfil', component: MiPerfilComponent },
      { path: 'mis-turnos', component: MisTurnosComponent },
      { path: 'solicitar-turno', component: TurnoSolicitarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PacienteRoutingModule { }