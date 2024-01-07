import { ChangeEvent, useState } from "react";
import Modal from "react-modal";

import { FormResponse, emptyFormResponse } from "./types";
import { api } from "../../lib/axios";

import close from "../../assets/images/events-page/close.png";
import "./style.scss";

interface EventModalProps
{
  isOpen: boolean;
  closeModal: () => void
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

function EventModal(props: EventModalProps)
{
  const { isOpen, closeModal } = props;
  const [formResponse, setFormResponse] = useState<FormResponse>(emptyFormResponse);
  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;

  function updateFormResponses(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  {
    const { name, value } = event.target;
    setFormResponse((previousState) => ({ ...previousState, [name]: value }));
  }

  function resetFormResponse()
  {
    setFormResponse(emptyFormResponse);
  }

  async function registerEvent()
  {
    const token = localStorage.getItem(localStorageTokenId);
    const response = await api.post("/evento/", formResponse, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 201)
    {
      console.log("Evento cadastrado com sucesso!");
      resetFormResponse();
    }
    else
    {
      console.log("Erro ao realizar cadastro!");
    }
  }

  return (
    <Modal isOpen={isOpen} style={customStyles} className="event-modal">
      <button type="button" onClick={closeModal} className="close">
        <img src={close} className="close-image" />
      </button>

      <div className="modal-content">
        <h2>Cadastrar Evento</h2>

        <div className="form-content">

          <input
            className="event-name"
            type="text"
            name="nomeDoEvento"
            placeholder="Nome do Evento"
            value={formResponse.nomeDoEvento}
            onChange={updateFormResponses}
          />
          <textarea
            className="event-description"
            name="descricao"
            placeholder="Descrição do Evento"
            value={formResponse.descricao}
            onChange={updateFormResponses}
          ></textarea>
          <div className="input-group">
            <label htmlFor="">Data do Evento</label>
            <input
              className="event-datetime"
              type="datetime-local"
              name="dataDoEvento"
              id="dataDoEvento"
              value={formResponse.dataDoEvento}
              onChange={updateFormResponses}
            />
          </div>
          <button className="register-event" onClick={registerEvent} >Cadastrar</button>

        </div>
      </div>
    </Modal>
  );
}

export default EventModal;