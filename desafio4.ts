import { Equal, Expect } from "./types/validateTypes";

// Ajuste a tipagem listType para aceitar valores numéricos e de texto
type listType = string | number;

// Validações
const list_of_packs: listType[] = [];
list_of_packs.push('um');
list_of_packs.push(2);
list_of_packs.push(2.5);
