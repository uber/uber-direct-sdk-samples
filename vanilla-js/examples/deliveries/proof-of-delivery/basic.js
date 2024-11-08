import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
    const deliveriesClient = createDeliveriesClient(token);
    const deliveryId = "del_FU5geU1YRWqK_ppWqln4IA";
    const req = {
      waypoint: "dropoff",
      type: "picture"
    };
    return deliveriesClient.proofOfDelivery(deliveryId, req);
  })
  .then((delivery) => {
    console.log(
      `Your PoD id: ${delivery.document} `
    );
  })
  .catch((error) => {
    console.error("Error pod:", error);
  });
