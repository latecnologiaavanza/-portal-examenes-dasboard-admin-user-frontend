import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriaComponent } from './add-categoria.component';

describe('AddCategoriaComponent', () => {
  let component: AddCategoriaComponent;
  let fixture: ComponentFixture<AddCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
