import { describe, expect, it } from 'vitest';
import { calcularPrecioFinal } from '../src/services/precios.ts';

describe('calcularPrecioFinal', () => {
  // Pruebas iniciales del laboratorio
  it('aplica un descuento correctamente', () => {
    expect(calcularPrecioFinal(1000, 10)).toBe(900);
  });

  it('permite descuento de 0 %', () => {
    expect(calcularPrecioFinal(1000, 0)).toBe(1000);
  });

  // Esta es la prueba que antes fallaba y ahora pasa gracias a la corrección en el servicio
  it('rechaza descuentos superiores al 100 %', () => {
    expect(() => calcularPrecioFinal(1000, 150)).toThrow(RangeError);
  });

  // --- NUEVAS PRUEBAS REQUERIDAS (Sección 6) ---

  it('devuelve cero con un descuento del 100 %', () => {
    expect(calcularPrecioFinal(1000, 100)).toBe(0);
  });

  it('lanza RangeError si el precio es negativo', () => {
    expect(() => calcularPrecioFinal(-100, 10)).toThrow(RangeError);
  });

  it('lanza RangeError si el descuento es negativo', () => {
    expect(() => calcularPrecioFinal(1000, -10)).toThrow(RangeError);
  });

  // Desafío adicional
  it('lanza RangeError cuando el precio es NaN', () => {
    expect(() => calcularPrecioFinal(NaN, 10)).toThrow(RangeError);
  });
});