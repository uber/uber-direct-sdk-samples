// TODO: Replace with '@uber-direct'
import { getAccessToken, createDeliveriesClient } from '../../../dist/index.js';

(async () => {
  const token = await getAccessToken();
  const deliveriesClient = createDeliveriesClient(token);
  const deliveryRequest = {
    pickup_name: 'Store Name',
    pickup_address: JSON.stringify({
      street_address: ['425 Market St'],
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94105',
      country: 'US',
    }),
    pickup_phone_number: '+14155551212',
    dropoff_name: 'Customer Name',
    dropoff_address: JSON.stringify({
      street_address: ['201 3rd St'],
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94103',
      country: 'US',
    }),
    dropoff_phone_number: '+14155551212',
    manifest_items: [
      {
        name: 'iPhone',
        quantity: 1,
        size: 'small',
      },
      {
        name: 'iPad',
        quantity: 1,
        size: 'medium',
      },
    ],
    test_specifications: {
      robo_courier_specification: {
        mode: 'auto',
      },
    },
  };
  const delivery = await deliveriesClient.createDelivery(deliveryRequest);
  console.log(`Your delivery ID is: ${delivery.id} (${delivery.tracking_url})`);
})();
