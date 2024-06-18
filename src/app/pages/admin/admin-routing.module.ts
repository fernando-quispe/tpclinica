import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SeccionUsuarioComponent } from './seccion-usuario/seccion-usuario.component';
import { MiPerfilComponent } from '../../componentes/mi-perfil/mi-perfil.component';
import { MisTurnosComponent } from '../../componentes/mis-turnos/mis-turnos.component';
import { TurnoSolicitarComponent } from '../../componentes/turno-solicitar/turno-solicitar.component';
import { SeccionPacienteComponent } from '../../componentes/seccion-paciente/seccion-paciente.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', component: SeccionUsuarioComponent },
      { path: 'inicio', component: SeccionUsuarioComponent },
      { path: 'mi-perfil', component: MiPerfilComponent },
      { path: 'mis-turnos', component: MisTurnosComponent },
      { path: 'solicitar-turno', component: TurnoSolicitarComponent },
      { path: 'seccion-paciente', component: SeccionPacienteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
