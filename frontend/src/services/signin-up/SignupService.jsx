/* Import Section - Start */

/* React Imports - Start */

import axios from "axios";

/* Import Section - End */

/* React Imports - End */

let base_url = process.env.REACT_APP_API_URL;

/* Function - Start */

async function userRegistration(first_name,last_name,email,dob,password)
{
   let response = await axios.post(`${base_url}/api/signinUp/register`,{first_name:first_name,last_name:last_name,email:email,dob:dob,password:password});
   console.log(response)
   return response;
}

/* Function - Start */

/* Export default functionName; */

export default {userRegistration};