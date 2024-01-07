import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

import { api } from "../../lib/axios";
import { EventResponse, emptyUserResponse, UserResponse } from "./types";
import plusSign from "../../assets/images/events-page/plus-sign.png";

import "./style.scss";

function EventsPage()
{
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [currentUser, setCurrentUser] = useState<UserResponse>(emptyUserResponse);

  function loadCurrentUserData()
  {
    async function loadUserData()
    {
      const token = localStorage.getItem(localStorageTokenId);
      const response = await api.get<UserResponse>("/usuario/", { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) setCurrentUser(response.data);
    }

    loadUserData();
  }

  useEffect(loadCurrentUserData, [localStorageTokenId]);

  function renderAddEventButton(): JSX.Element | undefined
  {
    return (currentUser.tipoUsuario === "ONG") ?
              <button type="button" className="create-event" onClick={openModal}><img className="plus-sign" src={plusSign} /></button> :
              undefined;
  }

  return (
    <>
      <Menu />

      <div className="events-page">
        <div className="events-section">
          <h2 className="title">Eventos Futuros</h2>
          <div className="events-container">

            {renderAddEventButton()}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventsPage;