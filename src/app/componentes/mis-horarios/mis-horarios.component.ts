import { Component, EventEmitter, Output } from '@angular/core';
import { ClinicaService } from '../../services/clinica.service';
import { OtherService } from '../../services/other.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mis-horarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mis-horarios.component.html',
  styleUrl: './mis-horarios.component.css'
})

export class MisHorariosComponent {

  @Output() volver = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  miUid: string = '';
  agenda: boolean[] = [];
  nuevaAgenda: boolean[] = [];
  mockAgenda: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
  semana: string[] = [
    'Domingos',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábados'
  ];

  constructor(
    private usuarioService: ClinicaService,
    private otroService: OtherService) {
  }

  ngOnInit(): void {
    this.otroService.getDocumentSnapshotDeUsuario().subscribe(
      ds => {
        this.miUid = ds.id;
        this.agenda = ds.data().agenda ? ds.data().agenda : this.mockAgenda;
        this.nuevaAgenda = this.agenda.slice();
      }
    );
  }

  confirmar() {
    this.usuarioService.updateProfesionalAgenda(this.miUid, this.nuevaAgenda)
    .then(
      () => this.volver.emit()
    );
  }

  onDiaClickeado(indice: number) {
    this.nuevaAgenda[indice] = !this.nuevaAgenda[indice];
  }
  
  onCloseModal(): void {
    this.closeModal.emit();
  }
}