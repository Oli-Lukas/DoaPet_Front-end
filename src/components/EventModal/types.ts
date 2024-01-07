export type FormResponse = {
  nomeDoEvento: string;
  descricao: string;
  dataDoEvento: string;
};

export const emptyFormResponse: FormResponse = {
  nomeDoEvento: "",
  descricao: "",
  dataDoEvento: ""
};