import { Pipe, PipeTransform } from '@angular/core';
import { Profesional } from '../interfaces/profesional';

@Pipe({
  name: 'doctor',
  standalone: true //ver de sacarlo
})

export class DoctorPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: Profesional): string {
    return 'Dr/a. ' + value.apellido + ', ' + value.nombre;
  }
}