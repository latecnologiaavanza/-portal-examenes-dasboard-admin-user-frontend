import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreguntaComponent } from './add-pregunta.component';

describe('AddPreguntaComponent', () => {
  let component: AddPreguntaComponent;
  let fixture: ComponentFixture<AddPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
