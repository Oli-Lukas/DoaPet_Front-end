import { useState } from 'react';

import { AdoptionOfferResponse } from './types';
import AdoptionOfferCard from '../../components/AdoptionOfferCard';
import AdoptionOfferModal from '../../components/AdoptionOfferModal';
import Menu from "../../components/Menu";

import plusSign from "../../assets/images/home-page/plus-sign.png";
import cardImage from "../../assets/images/home-page/cao-labrador.png";

import "./style.scss";

function HomePage()
{
  const [modalOpen, setModalOpen] = useState(false);
  const openModal  = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [adoptionOffers, setAdoptionOffers] = useState<AdoptionOfferResponse[]>();

  return (
    <div className="home-page">
      <Menu />

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

          <AdoptionOfferCard
            cardImage={cardImage}
            title="Titulo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero odio, auctor sit amet ipsum ut, dictum sodales lorem."
          />

        </div>

        <AdoptionOfferModal
          isOpen={modalOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}

export default HomePage;