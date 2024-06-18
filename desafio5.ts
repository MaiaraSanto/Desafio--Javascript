import { Equal, Expect } from "./types/validateTypes";

// Ajuste a tipagem IUserYouMade para aceitar os campos do objeto userYouMade
interface IUserYouMade {
  name: string;
  age: number;
  work: string;
  siblings: number;
  rating: number;
  applications: string[];
  active: boolean;
}

// Validações
let userYouMade: IUserYouMade;

userYouMade = {
  name: "Nome Do Usuário",
  age: 22,
  work: "Analista",
  siblings: 0,
  rating: 10,
  applications: ['RH', 'Dev'],
  active: true,
};
