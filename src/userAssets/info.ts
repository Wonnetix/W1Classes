class UserAssetsInfoRequest {
  id_user: string;
  id_asset?: number;
}

class UserAssetInfo {
  id_asset: number;
  name: string;
  symbol: string;
  balance: number;
  update_time: string;
}

class UserAssetsInfoResponse {
  id_user: string;
  assets: UserAssetInfo[];
}

export { UserAssetsInfoResponse, UserAssetInfo, UserAssetsInfoRequest };
