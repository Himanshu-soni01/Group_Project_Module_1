/* Import Section - Start */

/* React Imports - Start */

import React, { useState, useEffect } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash, FaSearch } from "react-icons/fa";
import EventForm from "../manageEvents/eventForm";
import manageeventservice from "../../services/manageEvents/ManageEventsService";
import UpdateEvent from "../manageEvents/UpdateEvent";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const ManageEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iseditopen, setIseditopen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [sortItem, setSortItem] = useState({ key: "", direction: "" });
  const [events, setEvents] = useState([]);
  const [editData, setEditData] = useState();

  const getevents = () => {
    console.log("sending req from me");
    manageeventservice.getManageEvent().then((response) => {
      setEvents(response.data);
    });
  };

  useEffect(() => {
    getevents();
  },[]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIseditopen(false);
  };

  const handleEditClick = async (event_id) => {
    await manageeventservice.editEvent(event_id).then((response) => {
      setEditData(response.data);
      console.log(response.data);
    });

    setIseditopen(true);
  };

  const handleDeleteEvent = (eventId) => {
    manageeventservice.deleteEvent(eventId);
  };

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  const requestSort = (key) => {
    let direction = "ascending";

    if (sortItem.key === key && sortItem.direction === "ascending") {
      direction = "descending";
    }

    setSortItem({ key, direction });
  };

  const sortedData = events
    .filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortItem.key === "") return 0;

      const aValue = a[sortItem.key];

      const bValue = b[sortItem.key];

      if (aValue < bValue) {
        return sortItem.direction === "ascending" ? -1 : 1;
      }

      if (aValue > bValue) {
        return sortItem.direction === "ascending" ? 1 : -1;
      }

      return 0;
    });

  /* Render View Return - Start */

  return (
    <>
      <div className="manageEvent-page">
        <h1>Manage Event</h1>
        <div className="add-event-btn">
          <button className="ad-ev-btn" onClick={openModal}>
            + Add Event
          </button>
          {isModalOpen && (
            <EventForm
              // onEditEvent={handleEditEvent}
              // event={selectedEvent}
              onCancel={closeModal}
            />
          )}

          {iseditopen && <UpdateEvent onCancel={closeModal} props={editData} />}
        </div>
        <div>
          <div className="search">
            <input
              type="text"
              placeholder="Search events"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <table className="events-table">
            <thead>
              <tr>
                <th onClick={() => requestSort("event_type")}>
                  Event_Type
                  {sortItem.key === "event_type" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("title")}>
                  Title
                  {sortItem.key === "project_name" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("start_date")}>
                  Start_Date
                  {sortItem.key === "start_date" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("end_date")}>
                  End_Date
                  {sortItem.key === "end_date" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("start_time")}>
                  Start_Time
                  {sortItem.key === "start_time" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("end_time")}>
                  End_Time
                  {sortItem.key === "end_time" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>

                <th onClick={() => requestSort("other_details")}>
                  Other_Details
                  {sortItem.key === " other_details" &&
                    (sortItem.direction === "ascending" ? (
                      <span>&uarr;</span>
                    ) : (
                      <span>&darr;</span>
                    ))}
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((event) => (
                <tr key={event.id}>
                  <td>{event.eventType}</td>
                  <td>{event.title}</td>
                  <td>{event.startDate}</td>
                  <td>{event.endDate}</td>
                  <td>
                    {event.startTime === "00:00:00" ? "-" : event.startTime}
                  </td>
                  <td>{event.endTime === "00:00:00" ? "-" : event.endTime}</td>
                  {/* <td>{event.is_allday === 1 ? "Y" : "N"}</td> */}
                  <td>{event.otherDetails}</td>
                  <td className="edit-btn">
                    <button
                      className="btnnn"
                      onClick={() => handleEditClick(event.id)}
                    >
                      <FaPen />
                    </button>
                  </td>
                  <td className="edit-btn">
                    <button
                      className="dlte-btnnn"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName; */

export default ManageEvents;
