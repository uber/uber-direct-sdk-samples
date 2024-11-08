import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
    const deliveriesClient = createDeliveriesClient(token);

    const quoteReq = {
      pickup_address: JSON.stringify({
        street_address: ["425 Market St"],
        city: "San Francisco",
        state: "CA",
        zip_code: "94105",
        country: "US",
      }),
    };

    return deliveriesClient.createQuote(quoteReq);
  })
  .then((quote) => {
    console.log(`Your delivery quote ID is: ${quote.id}`);
  })
  .catch((error) => {
    console.error(`The error status is: ${error.status}`);
    console.error(`The error code is: ${error.code}`);
    console.error(`The error message is: ${error.message}`);
    console.error(
      `The error details are: ${JSON.stringify(error.metadata, null, 2)}`
    );
  });
