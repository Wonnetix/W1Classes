declare class CreateUserSubsRequest {
  id_user: number;
  id_substype: number;
  start_date: string;
  end_date: string;
  payment_id: string;
}
declare class CreateUserSubsResponse {
  id: number;
  error_code: number;
  error_message: string;
}
export { CreateUserSubsRequest, CreateUserSubsResponse };
