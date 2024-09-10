import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
    const deliveriesClient = createDeliveriesClient(token);
    const deliveryId = 'del_pEZlmh05Swev6MIcLqTg1A';
    return deliveriesClient.cancelDelivery(deliveryId);
  })
  .then((delivery) => {
    console.log(`Your delivery status is: ${delivery.status} (Order ID: ${delivery.tracking_url})`);
  })
  .catch((error) => {
    console.error("Error canceling delivery:", error);
  });
