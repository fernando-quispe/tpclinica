import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profesional } from '../../interfaces/profesional';
import { NgFor } from '@angular/common';
import { MUsuarioComponent } from '../m-usuario/m-usuario.component';

@Component({
  selector: 'app-prof-pendientes',
  standalone: true,
  imports: [NgFor, MUsuarioComponent],
  templateUrl: './prof-pendientes.component.html',
  styleUrl: './prof-pendientes.component.css'
})

export class ProfPendientesComponent {

  selectedItem: Profesional | null = null;
  @Output() onAceptarRechazar = new EventEmitter<{ id: string, value: string }>();
  @Input() profPendientes: Profesional[] = [];

  setSelectedItem(item: Profesional | null) {
    this.selectedItem = item;
  }

  aceptarRechazar(id:string, value: string){
    if(id != ''){
      this.onAceptarRechazar.emit({ id, value });
    }
  }
}