import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPendientesComponent } from './prof-pendientes.component';

describe('ProfPendientesComponent', () => {
  let component: ProfPendientesComponent;
  let fixture: ComponentFixture<ProfPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfPendientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
