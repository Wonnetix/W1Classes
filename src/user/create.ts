class CreateUserSubsRequest {
  idUser: number;
  idSubstype: number;
  startDate: string;
  endDate: string;
  paymentId: string;
}

class CreateUserSubsResponse {
  id: number;
  error_code: number;
  error_message: string;
}

export { CreateUserSubsRequest, CreateUserSubsResponse };
