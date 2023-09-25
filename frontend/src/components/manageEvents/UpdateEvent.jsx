import React, { useState } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import manageeventservice from "../../services/manageEvents/ManageEventsService";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UpdateEvent = ({ props, onCancel }) => {
  const [event_title, setEvent_title] = useState(props[0].title);
  const [event_type, setEvent_type] = useState(props[0].eventType);
  const [start_date, setStart_date] = useState(props[0].startDate);
  const [end_date, setEnd_date] = useState(props[0].endDate);
  const [start_time, setStart_time] = useState(props[0].startTime);
  const [end_time, setEnd_time] = useState(props[0].endTime);
  const [id, setId] = useState(props[0].id);
  // const [is_allday, setIs_allday] = useState(true);
  const [other_details, setOther_details] = useState(props[0].otherDetails);

  console.log("PROPS", props[0].title);

  const handleAddEvent = () => {
    if (
      start_date <= new Date().toISOString().split("T")[0] ||
      start_date >= new Date().toISOString().split("T")[0]
    ) {
      if (end_date >= start_date || end_date === undefined) {
        manageeventservice
          .updateevent(
            id,
            event_title,
            event_type,
            start_date,
            end_date,
            start_time,
            end_time,
            other_details
          )
          .then(() => {
            closeModal();
          });
        toast.success("Event modified successfully", {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.warning("End date is not valid", {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warning("Start date is not valid", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const closeModal = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="event-form-container">
          <button className="close" onClick={closeModal}>
            <span>&times;</span>
          </button>
          <p>Modify Event</p>

          <div className="add-event-input-area">
            <div className="add-event-name-data">
              <div className="form-name">
                <label>Event Name</label>
                <input
                  className="form-input"
                  type="text"
                  value={event_title}
                  onChange={(e) => setEvent_title(e.target.value)}
                />
              </div>
              <div className="form-type">
                <label>Event Type</label>
                <select
                  className="form-input"
                  value={event_type}
                  onChange={(e) => setEvent_type(e.target.value)}
                >
                  <option>Select</option>
                  <option value="Holiday">Holiday</option>
                  <option value="Event">Event</option>
                  <option value="Festival">Festival</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="dates">
              <div className="start-date">
                <label>Start Date</label>
                <input
                  className="form-date"
                  type="date"
                  value={start_date}
                  onChange={(e) => setStart_date(e.target.value)}
                />
              </div>
              <div className="end-date">
                <label>End Date</label>
                <input
                  className="form-date"
                  type="date"
                  value={end_date}
                  onChange={(e) => setEnd_date(e.target.value)}
                />
              </div>
            </div>

            <div className="time">
              <div className="start-time">
                <label>Start Time</label>
                <input
                  className="form-time"
                  type="time"
                  value={start_time}
                  onChange={(e) => setStart_time(e.target.value)}
                />
              </div>
              <div className="end-time">
                <label>End Time</label>
                <input
                  className="form-time"
                  type="time"
                  value={end_time}
                  onChange={(e) => setEnd_time(e.target.value)}
                />
              </div>
            </div>

            <div className="form-desc">
              <label>Description</label>
              <textarea
                className="form-des"
                value={other_details}
                onChange={(e) => setOther_details(e.target.value)}
              />
            </div>
          </div>
          <button
            className="form-button"
            // onClick={event ? handleEditEvent : handleAddEvent}
            onClick={handleAddEvent}
          >
            {/* {event ? "Update Event" : "Add Event"} */}
            Modify
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;
