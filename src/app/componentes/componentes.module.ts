import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { LayoutComponent } from './layout/layout.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TablaEspecialidadComponent } from './tabla-especialidad/tabla-especialidad.component';
import { ProfPendientesComponent } from './prof-pendientes/prof-pendientes.component';
import { AltaPacientesComponent } from './altas/alta-pacientes/alta-pacientes.component';
import { AltaProfesionalesComponent } from './altas/alta-profesionales/alta-profesionales.component';
import { AltaAdminComponent } from './altas/alta-admin/alta-admin.component';
import { FavbuttonComponent } from './favbutton/favbutton.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { MTurnoComponent } from './m-turno/m-turno.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { TurnoSolicitarComponent } from './turno-solicitar/turno-solicitar.component';
import { SeccionPacienteComponent } from './seccion-paciente/seccion-paciente.component';
import { MUsuarioComponent } from './m-usuario/m-usuario.component';
import { DoctorPipe } from '../pipes/doctor.pipe';
import { CaptchaComponent } from './captcha/captcha.component';



@NgModule({
  declarations: [
    //LayoutComponent,
    //SpinnerComponent,
    //TablaEspecialidadComponent,
    //ProfPendientesComponent,
    //MUsuarioComponent,
    //AltaPacientesComponent,
    //AltaProfesionalesComponent,
    //AltaAdminComponent,
    //FavbuttonComponent,
    //MiPerfilComponent,
    //DoctorPipe,
    //MisTurnosComponent,
    //TurnoSolicitarComponent,
    //MisHorariosComponent,
    //CaptchaComponent,
    //MTurnoComponent,
    //SeccionPacienteComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
   
    LayoutComponent,
    SpinnerComponent,
    TablaEspecialidadComponent,
    ProfPendientesComponent,
    AltaPacientesComponent,
    AltaProfesionalesComponent,
    AltaAdminComponent,
    FavbuttonComponent,
    MiPerfilComponent,
    MTurnoComponent,
    MisTurnosComponent,
    TurnoSolicitarComponent,
    SeccionPacienteComponent,

    MUsuarioComponent,
    DoctorPipe,
    CaptchaComponent
  ],
  exports: [
    LayoutComponent,
    SpinnerComponent,
    TablaEspecialidadComponent,
    ProfPendientesComponent,
    AltaPacientesComponent,
    AltaProfesionalesComponent,
    AltaAdminComponent,
    FavbuttonComponent,
    MiPerfilComponent,
    MTurnoComponent,
    MisTurnosComponent,
    TurnoSolicitarComponent,
    SeccionPacienteComponent,

    MUsuarioComponent,
    DoctorPipe,
    CaptchaComponent
  ],
})

export class ComponentesModule { }