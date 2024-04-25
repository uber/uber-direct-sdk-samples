import { components } from '../types/organizations';
type CreateOrgReq = components['schemas']['CreateOrgReq'];
type CreateOrgResp = components['schemas']['CreateOrgResp'];
type InviteMemberReq = components['schemas']['OrgInviteReq'];
type InviteMemberResp = components['schemas']['OrgInviteResp'];
type BillingType = components['schemas']['BillingType'];
type OnboardingInviteType = components['schemas']['OnboardingInviteType'];
export type { BillingType, OnboardingInviteType, CreateOrgReq, CreateOrgResp, InviteMemberReq, InviteMemberResp };
