import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamenPreguntasComponent } from './view-examen-preguntas.component';

describe('ViewExamenPreguntasComponent', () => {
  let component: ViewExamenPreguntasComponent;
  let fixture: ComponentFixture<ViewExamenPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExamenPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExamenPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
