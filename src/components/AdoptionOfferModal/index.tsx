import Modal from 'react-modal';
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
  const {
    isOpen,
    closeModal
  } = props;

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
      
    </Modal>
  );
}

export default AdoptionOfferModal;