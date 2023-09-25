/* Import Section - Start */

/* React Imports - Start */

import axios from "axios";

/* Import Section - End */

/* React Imports - End */

let base_url = process.env.REACT_APP_API_URL;

/* Function - Start */

async function getManageEvent(selectedCategory) {
  let response = await axios.get(`${base_url}/api/manageEvents/getevent`);

  return response;
}

async function deleteEvent(event_id) {
  await axios.delete(`${base_url}/api/manageEvents/deleteevent/${event_id}`);
}

async function editEvent(event_id) {
  const response = await axios.get(
    `${base_url}/api/manageEvents/getUpdateEventData/${event_id}`
  );
  return response;
}

async function addEvent(
  title,
  event_type,
  start_date,
  end_date,
  start_time,
  end_time,
  // is_allday,
  other_details
) {
  const response = await axios.post(`${base_url}/api/manageEvents/addevent`, {
    title,
    event_type,
    start_date,
    end_date,
    start_time,
    end_time,
    // is_allday,
    other_details,
  });
  return response;
}

async function updateevent(
  id,
  title,
  event_type,
  start_date,
  end_date,
  start_time,
  end_time,
  other_details
) {
  const response = await axios.patch(
    `${base_url}/api/manageEvents/updateevent/${id}`,
    {
      title,
      event_type,
      start_date,
      end_date,
      start_time,
      end_time,
      // is_allday,
      other_details,
    }
  );
  return response;
}

/* Function - End */

/* Export default functionName; */

export default {
  getManageEvent,
  deleteEvent,
  editEvent,
  addEvent,
  updateevent,
};
