import { CommonModule } from '@angular/common';
import { Component,NgModule } from '@angular/core';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

@Component({
  selector: 'lib-lib-geral',
  standalone: true,
  imports: [],
  template: `
    <p>
      lib-geral works!
    </p>
  `,
  styles: ``
})
export class LibGeralComponent {

}
