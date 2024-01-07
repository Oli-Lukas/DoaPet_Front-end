export type EventResponse = {
  evento: {
    id: number;
    nomeDoEvento: string;
    descricao: string;
    dataDoEvento: string;
    endereco: string;
  },
  organizador: {
    id: number;
    nome: string;
    email: string;
    tipoUsuario: string;
  }
};

export const emptyEventResponse = {
  evento: {
    id: -1,
    nomeDoEvento: "",
    descricao: "",
    dataDoEvento: "",
    endereco: ""
  },
  organizador: {
    id: -1,
    nome: "",
    email: "",
    tipoUsuario: ""
  }
};

export type UserResponse = {
  id: number;
  nome: string;
  email: string;
  tipoUsuario: string;
  endereco: string;
  numeroTelefone: string;
};

export const emptyUserResponse = {
  id: -1,
  nome: "",
  email: "",
  tipoUsuario: "",
  endereco: "",
  numeroTelefone: ""
};
