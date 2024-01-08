import { useState, useEffect } from 'react';

import Menu from "../../components/Menu";
import Footer from '../../components/Footer';

import { AdoptionOfferResponse } from './types';
import AdoptionOfferCard from '../../components/AdoptionOfferCard';
import AdoptionOfferModal from '../../components/AdoptionOfferModal';
import { api } from '../../lib/axios';

import plusSign  from "../../assets/images/home-page/plus-sign.png";

import "./style.scss";

function HomePage()
{
  const [modalOpen, setModalOpen] = useState(false);
  const openModal  = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [adoptionOffers, setAdoptionOffers] = useState<AdoptionOfferResponse[]>([]);
  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;

  function updateAdoptionOffers() {

    async function update() {
      const token = localStorage.getItem(localStorageTokenId);
      const response = await api.get<AdoptionOfferResponse[]>("/oferta-adocao/", { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) setAdoptionOffers(response.data);
    }

    update();
  }

  useEffect(updateAdoptionOffers, [modalOpen, localStorageTokenId]);

  return (
    <>
      <Menu />
      
      <div className="home-page">
        <div className="adoption-offer-section">
          <h2 className="title">Banco de Adoção</h2>

          <div className="adoption-offer-container">
            <button
              type="button"
              className="create-adoption-offer"
              onClick={openModal}
            >
              <img className="plus-sign" src={plusSign} />
            </button>

            { adoptionOffers.map(adoptionOffer => <AdoptionOfferCard id={adoptionOffer.ofertaAdocao.id} cardImage={adoptionOffer.ofertaAdocao.foto} title={adoptionOffer.ofertaAdocao.titulo} description={adoptionOffer.ofertaAdocao.descricao} />) }
          </div>
          
          <AdoptionOfferModal isOpen={modalOpen} closeModal={closeModal} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;