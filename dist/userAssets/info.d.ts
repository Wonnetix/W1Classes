import { AssetInfo } from "../asset/info";
declare class UserAssetsInfoRequest {
    id_user: string;
    id_asset?: string;
}
declare class UserAssetInfo {
    id_asset: string;
    balance: number;
    update_time: string;
    asset: AssetInfo;
}
declare class UserAssetsInfoResponse {
    id_user: string;
    assets: UserAssetInfo[];
}
export { UserAssetsInfoResponse, UserAssetInfo, UserAssetsInfoRequest };
