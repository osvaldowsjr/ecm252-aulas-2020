import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFormsComponent } from './pagina-forms.component';

describe('PaginaFormsComponent', () => {
  let component: PaginaFormsComponent;
  let fixture: ComponentFixture<PaginaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
