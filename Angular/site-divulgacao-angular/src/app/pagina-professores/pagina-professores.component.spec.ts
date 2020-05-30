import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProfessoresComponent } from './pagina-professores.component';

describe('PaginaProfessoresComponent', () => {
  let component: PaginaProfessoresComponent;
  let fixture: ComponentFixture<PaginaProfessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProfessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
