import { getAccessToken } from "uber-direct/auth";

getAccessToken()
  .then((token) => console.log(`Your access token is: ${token}`))
  .catch((error) =>
    console.error(`Error fetching access token: ${error.message}`)
  );
