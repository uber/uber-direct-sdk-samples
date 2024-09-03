import { getAccessToken } from "uber-direct/auth";
import { createOrganizationsClient } from "uber-direct/organizations";

getAccessToken()
  .then((token) => {
    const organizationsClient = createOrganizationsClient(token);
    const createOrgReq = {
      info: {
        name: "Test Organization",
        billing_type: "BILLING_TYPE_DECENTRALIZED",
         address: {
            street1: "2000 Tustin Ave",
            street2: "Rd",
            city: "Irvine",
            state: "CA",
            zipcode: "92602",
            country_iso2: "US",
          }
      },
      hierarchy_info: {
        parent_organization_id: "ORG_ID", //Replace with own before running example
      },
      options: {
        onboarding_invite_type: "ONBOARDING_INVITE_TYPE_EMAIL",
      },
    };

    return organizationsClient.createOrganization(createOrgReq);
  })
  .then((resp) => {
    console.log(`Your organization ID is: ${resp.organization_id}`);
  })
  .catch((e) => {
    // TODO: Handle errors better
    console.log(e);
  });
