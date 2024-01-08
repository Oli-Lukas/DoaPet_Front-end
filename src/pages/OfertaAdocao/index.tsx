import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Menu   from "../../components/Menu";
import Footer from "../../components/Footer";

import { api } from "../../lib/axios";
import { AdoptionOfferResponse, emptyOfertaAdocao } from "./types";
import adoptionImage from "../../assets/images/adoption-offer/cao-labrador.png";

import "./style.scss";

function OfertaAdocaoPage()
{
  const { id } = useParams();
  const navigator = useNavigate();
  const [adoptionOffer, setAdoptionOffer] = useState<AdoptionOfferResponse>(emptyOfertaAdocao)
  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;

  function loadOfertaAdocao()
  {
    async function loadData()
    {
      const token = localStorage.getItem(localStorageTokenId);
      const response = await api.get<AdoptionOfferResponse>(`/oferta-adocao/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) setAdoptionOffer(response.data);
    }

    loadData();
  }

  useEffect(loadOfertaAdocao, [id, localStorageTokenId]);

  function makeAdoptionRequest()
  {
    async function makeRequest()
    {
      const token = localStorage.getItem(localStorageTokenId);
      const response = await api.post(`solicitacao-adocao/${id}`, null, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 201)
        navigator("/home");
    }

    makeRequest();
  }

  return (
    <>
      <Menu />

      <div className="adoption-offer-page">
        <div className="image-container">
          <img src={`data:image/png;base64,${adoptionOffer.ofertaAdocao.foto}`} alt="Imagem" />
        </div>

        <div className="content-container">
          <h2 className="adoption-title">{adoptionOffer.ofertaAdocao.titulo}</h2>
          <p className="adoption-description">{adoptionOffer.ofertaAdocao.descricao}</p>

          <hr />

          <h3 className="offer-details">Detalhes da Adoção</h3>
          <p><span className="highlight">Dono do Animal</span>: {adoptionOffer.anunciante.nome}</p>
          <p><span className="highlight">Localização da Oferta</span>: {adoptionOffer.ofertaAdocao.localizacao}</p>
          <p><span className="highlight">Nome do Animal</span>: {adoptionOffer.ofertaAdocao.titulo}</p>
          <p><span className="highlight">Descricao do Animal</span>: {adoptionOffer.ofertaAdocao.descricao}</p>

          <button
            className="request-adoption"
            onClick={makeAdoptionRequest}
          >
            Solicitar Adoção
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OfertaAdocaoPage;