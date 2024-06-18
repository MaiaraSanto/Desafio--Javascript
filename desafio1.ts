import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Ajuste a tipagem de IFullUser para incluir os campos de IUserWorker e IUserStudent
interface IFullUser extends IUserWorker, IUserStudent {}

// Validações
type casosDeValidacao = [
  Expect<ExpectExtends<IUserWorker, IFullUser>>,
  Expect<ExpectExtends<IUserStudent, IFullUser>>,
];

// Auxiliares
interface IUserWorker {
  name: string;
  work: string;
}

interface IUserStudent {
  name: string;
  age: number;
}
