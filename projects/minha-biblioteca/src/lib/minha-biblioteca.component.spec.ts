import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaBibliotecaComponent } from './minha-biblioteca.component';

describe('MinhaBibliotecaComponent', () => {
  let component: MinhaBibliotecaComponent;
  let fixture: ComponentFixture<MinhaBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
