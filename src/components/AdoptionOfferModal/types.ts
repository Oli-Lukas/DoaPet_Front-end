export type FormResponse = {
  nomeAnimal: string;
  especieAnimal: string;
  descricaoAnimal: string;
  racaAnimal: string;
  pesoAnimal: number;
  idadeAnimal: number;
  picture: File | undefined;
};

export const emptyFormResponse: FormResponse = {
  nomeAnimal: "",
  especieAnimal: "",
  descricaoAnimal: "",
  racaAnimal: "",
  pesoAnimal: 0.5,
  idadeAnimal: 1,
  picture: undefined
};