import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./EventList.scss";

const EventList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState([]);
  const [nextEvent, setNextEvent] = useState(null);
  const [otherEvents, setOtherEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${apiUrl}/events`);
        const eventsData = response.data;
        const sortedEvents = eventsData.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        const now = new Date();
        const next = sortedEvents.find((event) => new Date(event.date) >= now);
        const others = sortedEvents.filter((event) => event !== next);
        setEvents(eventsData);
        setNextEvent(next);
        setOtherEvents(others);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [apiUrl]);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  Modal.setAppElement("#root");

  return (
    <>
      <h2 className="event-list__title">EVENTS</h2>
    <section className="event-list">
      {nextEvent && (
        <div className="event-list__next-event">
          <h3 className="event-list__subtitle">Next Event</h3>
          <div
            onClick={() => openModal(nextEvent)}
            className="event-list__event-card"
          >
            <img
              src={nextEvent.image}
              alt={nextEvent.name}
              className="event-list__photo"
            />
          </div>
        </div>
      )}
        <h3 className="event-list__subtitle">Other Events</h3>
      <div className="event-list__other-events">
        {otherEvents.map((event) => (
          <div
            key={event.name}
            onClick={() => openModal(event)}
            className="event-list__event-card"
          >
            <img
              src={event.image}
              alt={event.name}
              className="event-list__photo"
            />
          </div>
        ))}
      </div>

      {selectedEvent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Event Details"
          className="event-list__modal"
          overlayClassName="event-list__overlay"
          >
          <div
            className="event-list__modal-background"
            style={{ backgroundImage: `url(${selectedEvent.bgimage})` }}
          >
            <button onClick={closeModal} className="event-list__modal-close">
              &times;
            </button>
            <div className="event-list__modal-content">
              <h2 className="event-list__modal-title">{selectedEvent.name}</h2>
              {selectedEvent.date ? (
                <p className="event-list__modal-date">{selectedEvent.date}</p>
              ) : (<p className="event-list__modal-date">Date TBD</p>)}
              {selectedEvent.time ? (
                <p className="event-list__modal-time">{selectedEvent.time}</p>
              ) : (<p className="event-list__modal-time">Time TBD</p>)}
              {selectedEvent.venue ? (
                <p className="event-list__modal-venue">{selectedEvent.venue}</p>
              ) : (<p className="event-list__modal-venue">Venue TBD</p>)}
              <p className="event-list__modal-location">
                {selectedEvent.location}
              </p>
              <p className="event-list__modal-description">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
    </>
  );
};

export default EventList;
