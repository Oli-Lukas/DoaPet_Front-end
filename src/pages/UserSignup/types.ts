export type IbgeUfResponseObject = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  }
};

export type IbgeCityResponseObject = {
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
  fullname: string;
  email: string;
  birthDate: string;
  username: string;
  state: string;
  city: string;
  neighborhood: string;
  publicPlace: string;
  password: string;
}

export const emptyFormResponse: FormResponse = {
  fullname: "",
  email: "",
  birthDate: "",
  username: "",
  state: "",
  city: "",
  neighborhood: "",
  publicPlace: "",
  password: ""
};