declare class SubsTypeInfoRequest {
    id_substype: number;
    language: string;
}
declare class SubsTypeInfoResponse {
    id: number;
    name: string;
    description: string;
    is_default: boolean;
}
export { SubsTypeInfoRequest, SubsTypeInfoResponse };
