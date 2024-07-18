import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dados: string[] = ['Dado 1', 'Dado 2', 'Dado 3'];

  getDados(): string[] {
    return this.dados;
  }
}
