import { getAccessToken } from 'uber-direct/auth';
import { createDeliveriesClient } from 'uber-direct/deliveries';

getAccessToken()
  .then((token) => {
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
    };

    return deliveriesClient.createQuote(quoteReq);
  })
  .then((quote) => {
    console.log(`Your delivery quote ID is: ${quote.id}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
