import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

let now = new Date();

let prepTime = new Date(now.getTime() + 15 * 60000); // Preptime 15min
let deliveryPromise = new Date(now.getTime() + 60 * 60000); //

(async () => {
  const token = await getAccessToken();
  const deliveriesClient = createDeliveriesClient(token);
  const deliveryRequest = {
    pickup_name: "Store Name",
    pickup_address: JSON.stringify({
      street_address: ["425 Market St"],
      city: "San Francisco",
      state: "CA",
      zip_code: "94105",
      country: "US",
    }),
    pickup_notes: "Follow big green signs in the parking lot",
    pickup_phone_number: "+14155551212",
    external_store_id: "myStore123",
    dropoff_name: "Customer Name",
    dropoff_address: JSON.stringify({
      street_address: ["201 3rd St"],
      city: "San Francisco",
      state: "CA",
      zip_code: "94103",
      country: "US",
    }),
    dropoff_notes: "apt 45",
    dropoff_phone_number: "+14155551212", //e164 format
    deliverable_action: "deliverable_action_meet_at_door", // Happy path. Possible values: deliverable_action_meet_at_door, deliverable_action_leave_at_door
    undeliverable_action: "return", // Unhappy path. Possible values: return, leave_at_door, discard
    manifest_items: [
      {
        name: "iPhone",
        quantity: 1,
        size: "small",
      },
      {
        name: "iPad",
        quantity: 1,
        size: "medium",
      },
    ],
    manifest_reference: "REF000000",
    manifest_total_value: 1000, // Must be in cents
    undeliverable_action: "return",
    pickup_verification: {
      picture: true,
    },
    dropoff_verification: {
      picture: true,
    },
    return_verification: {
      picture: true,
    },
    pickup_ready_dt: prepTime.toISOString(), // Pass to ZuluTime
    pickup_deadline_dt: deliveryPromise.toISOString(),
    dropoff_ready_dt: prepTime.toISOString(),
    dropoff_deadline_dt: deliveryPromise.toISOString(),
    test_specifications: {
      robo_courier_specification: {
        mode: "auto",
      },
    },
  };

  const delivery = await deliveriesClient.createDelivery(deliveryRequest);
  console.log(`Your delivery ID is: ${delivery.id} (${delivery.tracking_url})`);
})();
