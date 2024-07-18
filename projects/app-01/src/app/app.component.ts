import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosService } from '../../../minha-biblioteca/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app-01';
  dados: string[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.dados = this.dadosService.getDados();
  }
}
