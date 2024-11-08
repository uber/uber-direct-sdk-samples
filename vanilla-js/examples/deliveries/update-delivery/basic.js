import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
    const deliveriesClient = createDeliveriesClient(token);
    const deliveryId = "del_i0ZvVMwwSNOmmctW7UraPA";
    const req = {
      tipByCustomer: 1000,
    };

    return deliveriesClient.updateDelivery(deliveryId, req);
  })
  .then((delivery) => {
    console.log(
      `Your delivery fee is: ${delivery.fee} (Order ID: ${delivery.tracking_url})`
    );
  })
  .catch((error) => {
    console.error("Error updating delivery tip:", error);
  });
