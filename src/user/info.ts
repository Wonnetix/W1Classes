class UserSubsInfoRequest {
  id_user: string;
}

class UserCapabilityInfo {
  id: number;
  name: string;
  quota: number;
  current: number;
  routingKey: string;
}

class UserSubsInfoResponse {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  capabilities: UserCapabilityInfo[];
}

export { UserSubsInfoResponse, UserCapabilityInfo, UserSubsInfoRequest };
