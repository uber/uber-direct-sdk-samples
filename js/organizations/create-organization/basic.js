// TODO: Replace with '@uber-direct'
import { getAccessToken, createOrganizationsClient } from '../../../dist/index.js';

(async () => {
  const token = await getAccessToken();
  const organizationsClient = createOrganizationsClient(token);

  try {
    const createOrgReq = {
      info: {
        name: 'Test Organization',
        billing_type: 'BILLING_TYPE_CENTRALIZED',
      },
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
