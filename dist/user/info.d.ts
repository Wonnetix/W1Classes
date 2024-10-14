declare class UserCapabilityInfo {
    id: number;
    name: string;
    quota: number;
    current: number;
    routingKey: string;
}
declare class UserSubsInfo {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    capabilities: UserCapabilityInfo[];
}
export { UserSubsInfo, UserCapabilityInfo };