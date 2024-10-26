import { TranslatableResource } from "../generic";
declare class SubsTypeInfoRequest {
    id_user: string;
    language: string;
}
declare class SubsTypeInfoResponse extends TranslatableResource {
    is_default: boolean;
}
export { SubsTypeInfoRequest, SubsTypeInfoResponse };
