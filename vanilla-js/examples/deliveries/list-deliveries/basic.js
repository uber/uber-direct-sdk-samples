import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
    const deliveriesClient = createDeliveriesClient(token);
    const options = {
      limit: 3,
    };
    return deliveriesClient.listDeliveries(options);
  })
  .then((response) => {
    if (response.data.length > 0) {
      response.data.forEach((delivery) => {
        console.log(`Delivery ID: ${delivery.id}`);
      });
    }
  })
  .catch((error) => {
    console.error("Error fetching deliveries:", error);
  });
