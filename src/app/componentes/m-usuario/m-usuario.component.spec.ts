import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUsuarioComponent } from './m-usuario.component';

describe('MUsuarioComponent', () => {
  let component: MUsuarioComponent;
  let fixture: ComponentFixture<MUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
