import { Component } from '@angular/core';
import { Turno } from '../../interfaces/turno';
import { TurnoService } from '../../services/turno.service';
import { OtherService } from '../../services/other.service';
import { ClinicaService } from '../../services/clinica.service';
import { MTurnoComponent } from '../m-turno/m-turno.component';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoctorPipe } from '../../pipes/doctor.pipe';

export type Estado = |'cancelar'|'resena'|'calificar'|'encuesta'|'rechazado'|'finalizado'|'historial';

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [MTurnoComponent, NgIf, NgFor, FormsModule, UpperCasePipe, DoctorPipe],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})

export class MisTurnosComponent {
  turnosOriginal: any[] = [];
  turnos: Turno[] = [];
  turnoSeleccionado: Turno | null = null;
  estado: Estado = 'cancelar';
  filtro: string = '';
  miRol: string = '';
  miUID: string = '';
  idTipo: string = '';
  loading: boolean = false;

  constructor(
    private turnoService: TurnoService,
    private otroService: OtherService,
    private usuarioService: ClinicaService
  ) {}

  ngOnInit(): void {
    this.otroService.getDocumentSnapshotDeUsuario().subscribe((ds) => {
      this.miRol = ds.data().rol;
      if (this.miRol === 'Administrador') {
        this.turnoService.getTurnos().subscribe((data) => (this.turnos = data));
      } else {
        this.miUID = ds.id;
        if (this.miRol === 'Paciente') {
          this.idTipo = 'idPac';
        } else if (this.miRol === 'Profesional') {
          this.idTipo = 'idEsp';
        }
        this.obtenerTurnos(this.idTipo, this.miUID);
      }
    });
  }

  pacienteFiltrar() {
    if (this.filtro) {
      this.turnos = this.turnos.filter(turno =>
        this.matchFilter(turno, this.filtro.toLowerCase())
      );
    } else {
      this.obtenerTurnos(this.idTipo, this.miUID);
    }
  }

  matchFilter(turno: Turno, filtro: string): boolean {
    const lowerCaseFiltro = filtro.toLowerCase();
    const historiaClinicaMatches = () => {
      if (turno.historial) {
        const historialValues = Object.values(turno.historial);
        return historialValues.some(value =>
          String(value).toLowerCase().includes(lowerCaseFiltro)
        );
      }
      return false;
    };
    return (
      turno.especialidad.toLowerCase().includes(lowerCaseFiltro) ||
      turno.especialista.nombre.toLowerCase().includes(lowerCaseFiltro) ||
      turno.especialista.apellido.toLowerCase().includes(lowerCaseFiltro) ||
      historiaClinicaMatches()
    );
  }

  obtenerTurnos(idTipo: string, miUID: string) {
    this.turnoService
      .getTurnoPorid(idTipo, miUID)
      .subscribe((data) => (this.turnos = data));
  }

  especialistaFiltrar() {
    if (this.filtro) {
      this.turnos = this.turnos.filter(turno =>
        this.matchFilterEspecialista(turno, this.filtro.toLowerCase())
      );
    } else {
      this.obtenerTurnos(this.idTipo, this.miUID);
    }
  }

  matchFilterEspecialista(turno: Turno, filtro: string): boolean {
    const lowerCaseFiltro = filtro.toLowerCase();  
    const historiaClinicaMatches = () => {
      if (turno.historial) {
        const historialValues = Object.values(turno.historial);
        return historialValues.some(value =>
          String(value).toLowerCase().includes(lowerCaseFiltro)
        );
      }
      return false;
    };
    return (
      turno.especialidad.toLowerCase().includes(lowerCaseFiltro) ||
      turno.paciente.nombre.toLowerCase().includes(lowerCaseFiltro) ||
      turno.paciente.apellido.toLowerCase().includes(lowerCaseFiltro) ||
      historiaClinicaMatches()
    );
  }

  cancelarTurnoHandler(turno: Turno | null) {
    this.estado = 'cancelar';
    this.turnoSeleccionado = turno;
  }

  verReviewHandler(turno: Turno | null) {
    this.estado = 'resena';
    this.turnoSeleccionado = turno;
  }

  calificarAtencionHandler(turno: any) {
    this.estado = 'calificar';
    this.turnoSeleccionado = turno;
  }

  completarEncuestaHandler(turno: Turno | null) {
    this.estado = 'encuesta';
    this.turnoSeleccionado = turno;
  }

  rechazarTurnoHandler(turno: Turno | null) {
    this.estado = 'rechazado';
    this.turnoSeleccionado = turno;
  }

  aceptarTurnoHandler(turno: Turno) {
    if (turno.id) {
      this.loading = true;
      turno.estado = 'aceptado';
      this.turnoService
        .actualizar(turno.id, turno)
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  finalizarTurnoHandler(turno: Turno | null) {
    this.estado = 'finalizado';
    this.turnoSeleccionado = turno;
  }

  crearHistorialClinica(turno: Turno | null) {
    this.estado = 'historial';
    this.turnoSeleccionado = turno;
  }
}