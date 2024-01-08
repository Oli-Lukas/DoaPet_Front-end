import { useEffect, useState } from "react";

import EventModal from "../../components/EventModal";
import EventCard from "../../components/EventCard";

import { api } from "../../lib/axios";
import { EventResponse, emptyUserResponse, UserResponse } from "./types";
import plusSign from "../../assets/images/events-page/plus-sign.png";
import eventImage from "../../assets/images/events-page/calendario.png";

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

  function loadEvents()
  {
    async function load()
    {
      const token = localStorage.getItem(localStorageTokenId);
      const response = await api.get<EventResponse[]>("/evento/", { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) setEvents(response.data);
    }

    load();
  }

  useEffect(loadEvents, [localStorageTokenId]);

  function renderAddEventButton(): JSX.Element | undefined
  {
    return (currentUser.tipoUsuario === "ONG") ?
              <button type="button" className="create-event" onClick={openModal}><img className="plus-sign" src={plusSign} /></button> :
              undefined;
  }

  return (
    <div className="events-page">
      <div className="events-section">
        <h2 className="title">Eventos Futuros</h2>
        <div className="events-container">

          {renderAddEventButton()}
          {events.map(event => <EventCard id={event.evento.id} title={event.evento.nomeDoEvento} description={event.evento.descricao} cardImage={eventImage} datetime={event.evento.dataDoEvento} />)}

        </div>

        <EventModal isOpen={modalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default EventsPage;