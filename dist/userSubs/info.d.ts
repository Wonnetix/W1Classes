declare class UserSubsInfoRequest {
    id_user: string;
}
declare class UserCapabilityInfo {
    id: number;
    name: string;
    quota: number;
    current: number;
    routing_key: string;
}
declare class UserSubsInfoResponse {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    capabilities: UserCapabilityInfo[];
}
export { UserSubsInfoResponse, UserCapabilityInfo, UserSubsInfoRequest };
