/* Import Section - Start */

/* React Imports - Start */

import axios from "axios";

/* Import Section - End */

/* React Imports - End */

let base_url = process.env.REACT_APP_API_URL;

/* Function - Start */

async function fetchData(email) {
  let response = await axios.get(
    `${base_url}/api/projectAllocation/getproject/${email}`
  );

  return response;
}

/* Function - End */

/* Export default functionName; */

export default { fetchData };
