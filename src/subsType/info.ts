import { TranslatableResource } from "../generic";

class SubsTypeInfoRequest {
  id_user: string;
  language: string;
}

class SubsTypeInfoResponse extends TranslatableResource {
  is_default: boolean;
}

export { SubsTypeInfoRequest, SubsTypeInfoResponse };
