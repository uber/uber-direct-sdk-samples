import { getAccessToken } from "uber-direct/auth";

(async () => {
  const token = await getAccessToken();
  console.log(`Your access token is: ${token}`);
})();
