import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculadoraComponent } from '../components';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {

  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);

  })

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
  	let soma = service.calcular(1,4,CalculadoraService.SOMA);
  	expect(soma).toEqual(5);
  }));

  it('deve garantir que 1 - 4 = -3', inject([CalculadoraService], (service: CalculadoraService) => {
  	let soma = service.calcular(1,4,CalculadoraService.SUBTRACAO);
  	expect(soma).toEqual(-3);
  }));

  it('deve garantir que 1 * 4 = 4', inject([CalculadoraService], (service: CalculadoraService) => {
  	let soma = service.calcular(1,4,CalculadoraService.MULTIPLICACAO);
  	expect(soma).toEqual(4);
  }));

  it('deve garantir que 1 / 4 = 0.25', inject([CalculadoraService], (service: CalculadoraService) => {
  	let soma = service.calcular(1,4,CalculadoraService.DIVISAO);
  	expect(soma).toEqual(0.25);
  }));

  it('deve retornar 0 para operação inválida', inject([CalculadoraService], (service: CalculadoraService) => {
  	let soma = service.calcular(1,4,'%');
  	expect(soma).toEqual(0);
  }));

  it('deve garantir que 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
  });
});
