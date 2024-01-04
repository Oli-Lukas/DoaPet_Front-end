import { useState } from 'react';

import AdoptionOfferModal from '../../components/AdoptionOfferModal';
import Menu from "../../components/Menu";

import plusSign from "../../assets/images/home-page/plus-sign.png";
import "./style.scss";
import { AdoptionOfferResponse } from './types';
import AdoptionOfferCard from '../../components/AdoptionOfferCard';

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

          <AdoptionOfferCard />

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