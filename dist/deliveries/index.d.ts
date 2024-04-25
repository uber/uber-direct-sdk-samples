import type { DeliveryQuoteReq, DeliveryReq, ListDeliveriesReq, PODReq, UpdateDeliveryReq } from './types';
export declare class DeliveriesClient {
    accessToken: string;
    baseURL: string;
    constructor(accessToken: string);
    createQuote(req: DeliveryQuoteReq): Promise<any>;
    createDelivery(req: DeliveryReq): Promise<any>;
    getDelivery(deliveryId: string): Promise<any>;
    listDeliveries(options?: ListDeliveriesReq): Promise<any>;
    cancelDelivery(deliveryId: string): Promise<any>;
    updateDelivery(deliveryId: string, req: UpdateDeliveryReq): Promise<any>;
    proofOfDelivery(deliveryId: string, req: PODReq): Promise<any>;
}
export declare const createDeliveriesClient: (accessToken: string) => DeliveriesClient;
