import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGeralComponent } from './lib-geral.component';

describe('LibGeralComponent', () => {
  let component: LibGeralComponent;
  let fixture: ComponentFixture<LibGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibGeralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
