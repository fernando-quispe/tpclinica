import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profesional } from '../../interfaces/profesional';
import Especialidad from '../../interfaces/especialidad';
import { ClinicaService } from '../../services/clinica.service';
import { NgFor } from '@angular/common';

export type idRef = {id?: string; especialidadRef: string; };

@Component({
  selector: 'app-m-usuario',
  standalone: true,
  imports: [NgFor],
  templateUrl: './m-usuario.component.html',
  styleUrl: './m-usuario.component.css'
})

export class MUsuarioComponent implements OnInit {

  @Input() data?: Profesional | null;
  @Output() closeModal = new EventEmitter();
  especialidades: Especialidad[] = [];
  idref: idRef[] = [];

  constructor(private clinicaFire: ClinicaService) {}
  
  ngOnInit(): void {
    if (this.data) {
      const id = this.data.id;
      if (id) {
        this.clinicaFire.getEspecialidadProfesional(id).subscribe((data) => {
          this.idref = data;
          this.clinicaFire.getEspecialidad().subscribe((datos) => {
            this.especialidades = datos;
            this.especialidades = this.especialidades.filter((especialidad) => {
              return this.idref.some(
                (d) => d.especialidadRef === especialidad.id
              );
            });
          });
        });
      }
    }
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }
}