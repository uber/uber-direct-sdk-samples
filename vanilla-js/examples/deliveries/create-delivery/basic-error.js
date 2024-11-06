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
      dropoff_phone_number: "0014155551212",
      deliverable_action: "deliverable_action_meet_at_door",
      undeliverable_action: "leave_at_door",
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
      manifest_reference: "REF0000001",
      manifest_total_value: 1000,
      test_specifications: {
        robo_courier_specification: {
          mode: "auto",
        },
      },
    };
    
    return deliveriesClient.createDelivery(deliveryRequest);
  })
  .then((delivery) => {
    console.log(`Your delivery ID is: ${delivery.id} (${delivery.tracking_url})`);
  })
  .catch((error) => {
    console.error("Error creating delivery:", error);
  });