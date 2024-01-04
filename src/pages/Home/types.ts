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
}