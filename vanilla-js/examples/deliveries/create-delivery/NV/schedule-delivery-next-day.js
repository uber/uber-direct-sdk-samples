import { getAccessToken } from "uber-direct/auth";
import { createDeliveriesClient } from "uber-direct/deliveries";

let deliveryPromiseStart = new Date(Date.now() + (24 * 60) * 60000); // Next day same hour
let deliveryPromiseEnd = new Date(Date.now() + (24 * 60 + 60) * 60000); // Next day +1hour

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
      pickup_latitude: 40.7066745,
      pickup_longitude: -74.0071976,
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
      pickup_latitude: 37.79162, 
      pickup_longitude: -122.39814,
      dropoff_notes: "apt 45",
      dropoff_phone_number: "+14155551212", // e164 format
      deliverable_action: "deliverable_action_meet_at_door", // Happy path. Possible values: deliverable_action_meet_at_door, deliverable_action_leave_at_door
      dropoff_verification: {
        pincode: {
          enabled: true,
          type: "random"
        },
      },
      dropoff_ready: deliveryPromiseStart.toISOString() ,
      dropoff_deadline: deliveryPromiseEnd.toISOString(),
      undeliverable_action: "discard", // Possible values: return, leave_at_door, discard
      manifest_items: [
        {
          name: "Black Sneakers",
          quantity: 1,
          size: "medium",
        }
      ],
      manifest_reference: "REF0000001", // This detail will be visible within the courier app.
      manifest_total_value: 1000 // Must be in cents
    };
    
    return deliveriesClient.createDelivery(deliveryRequest);
  })
  .then((delivery) => {
    console.log(`Your delivery ID is: ${delivery.id} (${delivery.tracking_url})`);
  })
  .catch((error) => {
    console.error("Error creating delivery:", error);
  });