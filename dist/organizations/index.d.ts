import type { CreateOrgReq } from './types';
import type { InviteMemberReq } from './types';
export declare class OrganizationsClient {
    accessToken: string;
    baseURL: string;
    constructor(accessToken: string);
    createOrganization(req: CreateOrgReq): Promise<any>;
    inviteMember(organizationId: string, req: InviteMemberReq): Promise<any>;
    getOrganization(organizationId: string): Promise<any>;
}
export declare const createOrganizationsClient: (accessToken: string) => OrganizationsClient;
