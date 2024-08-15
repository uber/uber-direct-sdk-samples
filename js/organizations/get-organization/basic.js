import { getAccessToken } from "uber-direct/auth";
import { createOrganizationsClient } from "uber-direct/organizations";

(async () => {
  const token = await getAccessToken();
  const organizationsClient = createOrganizationsClient(token);
  const organizationId = "f731a651-060a-431d-a236-5abc2402db0a";
  const organization = await organizationsClient.getOrganization(
    organizationId
  );
  console.log(organization);
  console.log(`Your organization ID is: ${organization.organization_id}`);
})();
