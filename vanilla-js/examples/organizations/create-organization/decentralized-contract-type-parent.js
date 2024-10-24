import { getAccessToken } from "uber-direct/auth";
import { createOrganizationsClient } from "uber-direct/organizations";

getAccessToken()
  .then((token) => {
    const organizationsClient = createOrganizationsClient(token);
    const createOrgReq = {
      info: {
        name: "Test Organization",
        billing_type: "BILLING_TYPE_DECENTRALIZED",
        contract_type: "CONTRACT_TYPE_PARENT",
        address: {
          street1: "2000 Tustin Ave",
          street2: "Rd",
          city: "Irvine",
          state: "CA",
          zipcode: "92602",
          country_iso2: "US",
        },
        point_of_contact: {
          email: "user@uber.com",
          phone_details: {
            phone_number: "15555555555",
            country_code: "1",
            subscriber_number: "5555555555",
          },
        },
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
