export type AdoptionOfferResponse = {
  ofertaAdocao: {
    id: number;
    statusAdocao: string;
    titulo: string;
    descricao: string;
    localizacao: string;
  },
  anunciante: {
    id: number;
    nome: string;
    email: string;
    tipoUsuario: string;
  }
};

export const emptyOfertaAdocao: AdoptionOfferResponse = {
  ofertaAdocao: {
    id: -1,
    statusAdocao: "",
    titulo: "",
    descricao: "",
    localizacao: ""
  },
  anunciante: {
    id: -1,
    nome: "",
    email: "",
    tipoUsuario: ""
  }
};