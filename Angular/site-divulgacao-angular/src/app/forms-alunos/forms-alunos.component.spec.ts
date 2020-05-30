import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAlunosComponent } from './forms-alunos.component';

describe('FormsAlunosComponent', () => {
  let component: FormsAlunosComponent;
  let fixture: ComponentFixture<FormsAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
