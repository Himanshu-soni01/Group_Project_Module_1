/* Import Section - Start */

/* React Imports - Start */

import axios from "axios";

/* Import Section - End */

/* React Imports - End */

let base_url = process.env.REACT_APP_API_URL;

/* Function - Start */

async function selectedCategory(selectedCategory) {
  let response = await axios.get(
    `${base_url}/api/calendar/${selectedCategory}`
  );

  return response;
}

async function getWeeklyEvent(selectedCategory) {
  let response = await axios.get(
    `${base_url}/api/calendar/selectedEventsbyweek/${selectedCategory}`
  );

  return response;
}

/* Function - End */

/* Export default functionName; */

export default { selectedCategory, getWeeklyEvent };
