import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
    const deliveriesClient = createDeliveriesClient(token);
    const deliveryId = "del_i0ZvVMwwSNOmmctW7UraPA";
    return deliveriesClient.getDelivery(deliveryId);
  })
  .then((delivery) => {
    console.log(delivery);
    console.log(
      `Your delivery status is: ${delivery.status} (Order ID: ${delivery.tracking_url})`
    );
  })
  .catch((error) => {
    console.error("Error fetching delivery:", error);
  });
