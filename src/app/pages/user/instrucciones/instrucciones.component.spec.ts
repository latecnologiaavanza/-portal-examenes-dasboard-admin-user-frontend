import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesComponent } from './instrucciones.component';

describe('InstruccionesComponent', () => {
  let component: InstruccionesComponent;
  let fixture: ComponentFixture<InstruccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
