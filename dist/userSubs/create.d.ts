declare class CreateUserSubsRequest {
    id_user: string;
    id_substype: string;
    start_date: string;
    end_date: string;
    payment_id: string;
}
declare class CreateUserSubsResponse {
    id: string;
    error_code: number;
    error_message: string;
}
export { CreateUserSubsRequest, CreateUserSubsResponse };
