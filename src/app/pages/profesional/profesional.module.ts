import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionalRoutingModule } from './profesional-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfesionalComponent } from './profesional.component';


@NgModule({
  declarations: [
    //HomeComponent,
    //ProfesionalComponent
  ],
  imports: [
    CommonModule,
    ProfesionalRoutingModule,
    HomeComponent,
    ProfesionalComponent
  ],
  exports:[
    HomeComponent,
    ProfesionalComponent
  ],
})

export class ProfesionalModule { }