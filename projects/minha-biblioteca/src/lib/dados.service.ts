import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dados: string[] = ['Dado 1', 'Dado 2', 'teste 3', 'teste 66', 'testezz'];

  getDados(): string[] {
    return this.dados;
  }
}
