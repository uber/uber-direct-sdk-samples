import { getAccessToken } from "uber-direct/auth";
import { createOrganizationsClient } from "uber-direct/organizations";

getAccessToken()
  .then((token) => {
    const organizationsClient = createOrganizationsClient(token);
    const organizationId = "ORG_ID"; //Replace with own before running example

    return organizationsClient.getOrganization(organizationId);
  })
  .then((organization) => {
    console.log(organization);
    console.log(`Your organization ID is: ${organization.organization_id}`);
  })
  .catch((e) => {
    // TODO: Handle errors better
    console.log(e);
  });
