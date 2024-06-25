import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Especialidad from '../../interfaces/especialidad';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClinicaService } from '../../services/clinica.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-tabla-especialidad',
  standalone: true,
  imports: [NgFor, NgIf, SpinnerComponent, NgClass, ReactiveFormsModule],
  templateUrl: './tabla-especialidad.component.html',
  styleUrl: './tabla-especialidad.component.css'
})

export class TablaEspecialidadComponent implements OnInit{

  botonSeleccionado: string | null = null;
  especialidades: Especialidad[] = [];
  selectedObjeto: any = null;
  @Output() seleccionar = new EventEmitter<Especialidad>();
  newEspecialidad: FormGroup;
  loading: boolean = false;

  constructor(private clinicaFire: ClinicaService, private fb: FormBuilder){
    this.newEspecialidad = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      //description: ['', [Validators.required]],
      estado:['Activa']
    });
  }

  ngOnInit(): void {
    this.clinicaFire.getEspecialidad().subscribe((resp) => {
      this.especialidades = resp;
    });
  }

  selectObjeto(especialidad: Especialidad) {
    this.seleccionar.emit(especialidad);
    this.selectedObjeto = especialidad.nombre;
  }

  isSelected(especialidad: Especialidad) {
    return this.selectedObjeto === especialidad.nombre;
  }

  async addEspecialidad() {
    try {
      this.loading = true;
      const auxEspecialidad = this.newEspecialidad.value;
      const rep = await this.clinicaFire.addEspecialidad(auxEspecialidad)
      console.log('respuesta de firestore: ', rep)
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      this.newEspecialidad.reset();
      this.loading = false;
    }
  }
}