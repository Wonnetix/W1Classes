declare class UserSubsInfoRequest {
    id_user: string;
}
declare class UserCapabilityInfo {
    id: number;
    name: string;
    quota: number;
    current: number;
    routingKey: string;
}
declare class UserSubsInfoResponse {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    capabilities: UserCapabilityInfo[];
}
export { UserSubsInfoResponse, UserCapabilityInfo, UserSubsInfoRequest };
