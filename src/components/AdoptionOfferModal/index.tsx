import { ChangeEvent, FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidV4 } from 'uuid';

import { api } from '../../lib/axios';
import { FormResponse, emptyFormResponse } from './types';

import close from "../../assets/images/home-page/close.png";
import "./style.scss";

interface AdoptionOfferModalProps
{
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function AdoptionOfferModal(props: AdoptionOfferModalProps)
{
  const { isOpen, closeModal } = props;
  const [formResponses, setFormResponses] = useState<FormResponse>(emptyFormResponse);
  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;

  function updateFormResponses(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
  {  
    const { name, value } = event.target;
    setFormResponses((previousState) => ({ ...previousState, [name]: value }));
  }

  function onChangePicture(event: FormEvent)
  {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0)
      setFormResponses((previousState) => ({ ...previousState, picture: files[0] }));
  }

  function resetFormResponse()
  {
    setFormResponses(emptyFormResponse);
  }

  async function registerAdoptionOffer()
  {
    if (formResponses.picture)
    {
      const form = new FormData();

      form.append("tituloAdocao", formResponses.nomeAnimal);
      form.append("descricaoAdocao", formResponses.descricaoAnimal);
      form.append("nomeAnimal", formResponses.nomeAnimal);
      form.append("especieAnimal", formResponses.especieAnimal);
      form.append("racaAnimal", formResponses.racaAnimal);
      form.append("pesoAnimal", formResponses.pesoAnimal.toString());
      form.append("idadeAnimal", formResponses.idadeAnimal.toString());
      form.append("descricaoAnimal", formResponses.descricaoAnimal);
      form.append("fotoAnimal", formResponses.picture);

      const token = localStorage.getItem(localStorageTokenId);
      const response = await api.post("/oferta-adocao/cadastrar", form, { headers: { Authorization: `Bearer ${token}` } });

      if (response.status === 201)
      {
        console.log("Oferta de adoção cadastrada com sucesso!");
        resetFormResponse();
      }
      else
      {
        console.log("Erro ao realizar cadastro!");
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      className="adoption-offer-modal"
    >
      
      <button
        type="button"
        onClick={closeModal}
        className="close"
      >
        <img
          src={close}
          className="close-image"
        />
      </button>

      <div className="modal-content">
        <h2>Cadastrar Adoção</h2>
        <div className="form-content">
          
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                placeholder="Nome do Animal"
                value={formResponses.nomeAnimal}
                onChange={updateFormResponses}
                name="nomeAnimal"
              />
            </div>

            <div className="input-group">
              <select name="especieAnimal" onChange={updateFormResponses} >
                <option disabled selected>Espécie do Animal</option>
                <option value="Cachorro" key={uuidV4()} >Cachorro</option>
                <option value="Gato"     key={uuidV4()} >Gato</option>
                <option value="Jabuti"   key={uuidV4()} >Jabuti</option>
                <option value="Cágado"   key={uuidV4()} >Cágado</option>
              </select>
            </div>
          </div>

          <textarea
            value={formResponses.descricaoAnimal}
            onChange={updateFormResponses}
            name="descricaoAnimal"
          >
          </textarea>

          <div className="row">
            <div className="input-group">
              <input
                type="text"
                placeholder="Raça do Animal"
                value={formResponses.racaAnimal}
                onChange={updateFormResponses}
                name="racaAnimal"
              />
            </div>

            <div className="input-group">
              <label htmlFor="">O animal pesa</label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                value={formResponses.pesoAnimal}
                onChange={updateFormResponses}
                name="pesoAnimal"
              />
              <label htmlFor="">Kg</label>
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label htmlFor="">Idade estimada</label>
              <input
                type="number"
                min="1"
                value={formResponses.idadeAnimal}
                onChange={updateFormResponses}
                name="idadeAnimal"
              />
              <label htmlFor="">Meses</label>
            </div>

            <div className="input">
              <label htmlFor="">Foto do animal</label>
              <input
                type="file"
                onChange={onChangePicture}
                name="picture"
              />
            </div>
          </div>

          <button
            className="register-adoption"
            onClick={registerAdoptionOffer}
          >
            Cadastrar
          </button>

        </div>
      </div>
      
    </Modal>
  );
}

export default AdoptionOfferModal;