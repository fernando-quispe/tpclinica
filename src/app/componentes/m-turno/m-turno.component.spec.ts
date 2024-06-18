import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTurnoComponent } from './m-turno.component';

describe('MTurnoComponent', () => {
  let component: MTurnoComponent;
  let fixture: ComponentFixture<MTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTurnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
