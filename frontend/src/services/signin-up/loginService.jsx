/* Import Section - Start */

/* React Imports - Start */

import axios from "axios";

/* Import Section - End */

/* React Imports - End */

let base_url = process.env.REACT_APP_API_URL;

/* Function - Start */

async function userLogin(email, password) {
  let response = await axios.post(`${base_url}/api/signinUp/login`, {
    email: email,
    password: password,
  });
  console.log(response);

  return response;
}

async function logindata(email) {
  let response = await axios.get(`${base_url}/api/signinUp/email/${email}`);
  console.log(response);

  return response;
}

/* Function - End */

/* Export default functionName; */

export default { userLogin, logindata };
