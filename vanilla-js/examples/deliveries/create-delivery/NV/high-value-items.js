import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

getAccessToken()
  .then((token) => {
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
    pickup_latitude: 37.79162, 
    pickup_longitude: -122.39814,
    pickup_notes: "Follow big green signs in the parking lot",
    pickup_phone_number: "+14155551212",
    external_store_id: "myStore123", // Please be aware that if you utilize this field in the Create Delivery process, you MUST also include it in your Create Quote API calls.
    pickup_verification: {
      picture: true
    },
    dropoff_name: "Customer Name",
    dropoff_address: JSON.stringify({
      street_address: ["201 3rd St"],
      city: "San Francisco",
      state: "CA",
      zip_code: "94103",
      country: "US",
    }),
    dropoff_latitude: 40.7727076,
    dropoff_longitude: -73.9839082,
    dropoff_notes: "apt 45",
    dropoff_phone_number: "+14155551212", // e164 format
    deliverable_action: "deliverable_action_meet_at_door", // Happy path. Possible values: deliverable_action_meet_at_door, deliverable_action_leave_at_door. Do not use deliverable_action_leave_at_door for high value orders
    dropoff_verification: {
      pincode: {
        enabled: true,
        type: "random"
      },
    },
    undeliverable_action: "return", // Possible values: return, leave_at_door, discard. Use only return for high value orders
    return_notes:"Please meet store members at the counter to verify the return of the order.",
    return_verification: {
      pincode: {
        enabled: true,
        type: "random"
      },
    },
    manifest_items: [
      {
        name: "Black Special Sneakers",
        quantity: 1,
        size: "medium",
      },
      {
        name: "White Special Sneakers",
        quantity: 1,
        size: "medium",
      }
    ],
    manifest_reference: "REF0000001", // This detail will be visible within the courier app.
    manifest_total_value: 25000 // Must be in cents
  };
  return deliveriesClient.createDelivery(deliveryRequest);
})
.then((delivery) => {
    console.log(`Your delivery ID is: ${delivery.id} (${delivery.tracking_url})`
    );
  })
  .catch((error) => {
    console.error('Error:', error);
  });