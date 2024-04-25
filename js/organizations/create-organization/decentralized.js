// TODO: Replace with '@uber-direct'
import { getAccessToken, createOrganizationsClient } from '../../../dist/index.js';

(async () => {
  const token = await getAccessToken();
  const organizationsClient = createOrganizationsClient(token);

  try {
    const createOrgReq = {
      info: {
        name: 'Test Organization Decentralized',
        billing_type: 'BILLING_TYPE_DECENTRALIZED',
        merchant_type: 'MERCHANT_TYPE_GROCERY',
        point_of_contact: {
          email: 'name@email.com',
          phone_details: {
            phone_number: '15555555555',
            country_code: '1',
            subscriber_number: '5555555555',
          },
        },
        address: {
          street1: '2000 Tustin Ave',
          street2: 'Rd',
          city: 'Irvine',
          state: 'CA',
          zipcode: '92602',
          country_iso2: 'US',
        },
      },
      organization_id: '4fe73ff8-0c9a-5ca3-aa2f-17ef3a8487d5',
      hierarchy_info: {
        parent_organization_id: '4fe73ff8-0c9a-5ca3-aa2f-17ef3a8487d5',
      },
      options: {
        onboarding_invite_type: 'ONBOARDING_INVITE_TYPE_EMAIL',
      },
    };

    const resp = await organizationsClient.createOrganization(createOrgReq);
    console.log(`Your organization ID is: ${resp.organization_id}`);
  } catch (e) {
    // TODO: Handle errors better
    console.log(e);
  }
})();
