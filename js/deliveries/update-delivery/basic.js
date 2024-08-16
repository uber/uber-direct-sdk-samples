import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

(async () => {
  const token = await getAccessToken();
  const deliveriesClient = createDeliveriesClient(token);
  const deliveryId = "del_LsdsanlbSYuGz9avuB-wDg";
  const req = {
    tipByCustomer: 1000,
  };

  const delivery = await deliveriesClient.updateDelivery(deliveryId, req);
  console.log(
    `Your delivery tip is: ${delivery.tip} (Order ID: ${delivery.trackingUrl})`
  );
})();
