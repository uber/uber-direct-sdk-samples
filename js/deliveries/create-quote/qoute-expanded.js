// TODO: Replace with '@uber-direct'
import { getAccessToken, createDeliveriesClient } from '../../../dist/index.js';

(async () => {
  const token = await getAccessToken();
  const deliveriesClient = createDeliveriesClient(token);

  const quoteReq = {
    pickup_address: JSON.stringify({
      street_address: ['425 Market St'],
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94105',
      country: 'US',
    }),
    dropoff_address: JSON.stringify({
      street_address: ['201 3rd St'],
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94103',
      country: 'US',
    }),
    pickup_latitude: 37.79157,
    pickup_longitude: -122.39825,
    dropoff_latitude: 37.78513,
    dropoff_longitude: -122.39997,
    pickup_phone_number: '+15555555555',
    dropoff_phone_number: '+15555555555',
    manifest_total_value: 1000,
    external_store_id: 'my_store_123'
  };

  const quote = await deliveriesClient.createQuote(quoteReq);
  console.log(`Your delivery quote ID is: ${quote.id}`);
})();
