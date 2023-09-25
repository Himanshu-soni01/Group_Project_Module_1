/* Import Section - Start */

import React, { useEffect, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ClipLoader from "react-spinners/ClipLoader";
import calServices from "../../services/calendar/CalendarService";
import "./../../App.css";

/* React Imports -End */

/* Import Section - End */

/* Function - Start */

const Calendar = () => {
  const [eventdata, setEventdata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [eventByWeek, setEventByWeek] = useState([]);
  const [eventDetails, setEventDetails] = useState(null);

  const handleEventClick = (info) => {
    setEventDetails(info.event);
  };

  const getSelectedCategory = () => {
    calServices
      .selectedCategory(selectedCategory)
      .then((response) => {
        setEventdata(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getWeekEvent = () => {
    calServices
      .getWeeklyEvent(selectedCategory)
      .then((response) => {
        setEventByWeek(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getSelectedCategory();
    getWeekEvent();
  }, [selectedCategory]);

  //  For DropDown

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

    console.log(selectedCategory);
  };

  /* Render View Return - Start */

  return (
    <div className="calendar-area">
      <div className="calendar-table">
        <div className="dashboard-header">Events</div>

        {isLoading ? (
          <ClipLoader color={"black"} size={50} />
        ) : (
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={
              eventdata.length > 0 &&
              eventdata.map((item) => ({
                title: item.title,
                allDay: item.isAllDay === false ? false : true,
                start: item.startDate + "T" + item.startTime,
                end: item.endDate + "T" + item.endTime,
                extendedProps: {
                  description: item.otherDetails,
                },

                backgroundColor:
                  item.eventType === "Birthday"
                    ? "purple"
                    : item.eventType === "Meeting"
                    ? "#ca4f89"
                    : item.eventType === "Holiday"
                    ? "red"
                    : item.eventType === "Festival"
                    ? "#2596be"
                    : "#242464",
              }))
            }
            eventClick={handleEventClick}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={"90vh"}
          />
        )}
      </div>

      {isLoading ? (
        ""
      ) : (
        <div className="calendar-dropdown-area">
          {isLoading ? (
            <></>
          ) : (
            <div className="calendar-dropdownFilter">
              <select
                id="category"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="All">ALL</option>
                <option value="Holiday">Holiday</option>
                <option value="Event">Event</option>
                <option value="Birthday">Birthday</option>
                <option value="Festival">Festival</option>
                <option value="Others">Others</option>
              </select>
              <i className="fa-solid fa-filter"></i>
            </div>
          )}
          <div className="calendar-dropdown-details">
            <p className="calendar-dropdown-details-header">Upcoming Events</p>

            {eventByWeek.length > 0 &&
              eventByWeek.map((item, index) => (
                <ul style={{ marginLeft: "-18px", position: "relative" }}>
                  <li style={{ fontWeight: "600", fontSize: "16px" }}>
                    {item.title}
                  </li>
                </ul>
              ))}

            <div className="calendar-dropdown-eventdata"></div>
          </div>
          {eventDetails && (
            <div className="calendar-event-area">
              <p className="calendar-event-area-header">{eventDetails.title}</p>

              <div
                style={{
                  marginLeft: "-50px",
                  position: "relative",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {/* <p>Title: {eventDetails.title}</p> */}
                {eventDetails.extendedProps.description != null ? (
                  <p>Details : {eventDetails.extendedProps.description}</p>
                ) : null}
                <p>
                  Start:{" "}
                  {eventDetails.start
                    ? eventDetails.start.toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short",
                      })
                    : "N/A"}
                </p>
                <p>
                  End:{" "}
                  {eventDetails.end
                    ? eventDetails.end.toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short",
                      })
                    : "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  /* Render View Return - End */
};

/* Function - End */

/* Export default functionName */

export default Calendar;
