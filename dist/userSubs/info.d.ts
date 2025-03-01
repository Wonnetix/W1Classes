import { UserAssetInfo } from "../userAssets/info";
declare class UserSubsInfoRequest {
    id_user: string;
}
declare class UserCapabilityInfo {
    id: string;
    name: string;
    quota: number;
    current: number;
    routing_key: string;
}
declare class UserSubsInfoResponse {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    capabilities: UserCapabilityInfo[];
    assets?: UserAssetInfo[];
}
export { UserSubsInfoResponse, UserCapabilityInfo, UserSubsInfoRequest };
