import { AssetInfo } from "../asset/info";

class UserAssetsInfoRequest {
  id_user: string;
  id_asset?: string;
}

class UserAssetInfo {
  id_asset: string;
  balance: number;
  update_time: string;
  asset: AssetInfo;
}

class UserAssetsInfoResponse {
  id_user: string;
  assets: UserAssetInfo[];
}

export { UserAssetsInfoResponse, UserAssetInfo, UserAssetsInfoRequest };
