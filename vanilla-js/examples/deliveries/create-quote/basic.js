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
      external_store_id: "myStore123",// Please be aware that if you utilize this field in the Create Delivery process, you MUST also include it in your Create Quote API calls.
    };

    return deliveriesClient.createQuote(quoteReq); // Make sure to save the quote_id, an if a identical quote is necessary within 15min use the information saved
  })
  .then((quote) => {
    console.log(`Your delivery quote ID is: ${quote.id}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
