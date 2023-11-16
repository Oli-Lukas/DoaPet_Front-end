export type IbgeStatesResponseObject = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  }
};

export type IbgeCitiesResponseObject = {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: {
        id: number;
        sigla: string;
        nome: string;
        regiao: {
          id: number;
          sigla: string;
          nome: string;
        }
      }
    }
  }
};

export type FormResponse = {
  name: string;
  email: string;
  foundationDate: string;
  username: string;
  state: string;
  city: string;
  neighborhood: string;
  publicPlace: string;
  password: string;
}

export const emptyFormResponse: FormResponse = {
  name: "",
  email: "",
  foundationDate: "",
  username: "",
  state: "",
  city: "",
  neighborhood: "",
  publicPlace: "",
  password: ""
}