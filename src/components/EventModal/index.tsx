import Modal from "react-modal";
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

  function registerEvent()
  {

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
            name=""
            placeholder="Nome do Evento"
          />
          <textarea
            className="event-description"
            name=""
            placeholder="Descrição do Evento"
          ></textarea>
          <div className="input-group">
            <label htmlFor="">Data do Evento</label>
            <input className="event-datetime" type="datetime-local" name="" id="" />
          </div>
          <button className="register-event" onClick={registerEvent} >Cadastrar</button>

        </div>
      </div>
    </Modal>
  );
}

export default EventModal;