import { Equal, Expect } from "./types/validateTypes";

// Ajuste a tipagem de myFunction para aceitar a função duplicarNumero
type myFunction = (value: number) => number;

// Validações
type casosDeValidacao = [
  Expect<Equal<typeof duplicarNumero, myFunction>>,
];

// Auxiliares
function duplicarNumero(value: number): number {
  return value * 2;
}
