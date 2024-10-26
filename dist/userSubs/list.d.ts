import { SubsTypeInfoResponse } from "../subsType/info";
declare class UserSubsListResponse {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    payment_id: string;
    subs_type: SubsTypeInfoResponse;
}
export { UserSubsListResponse };
