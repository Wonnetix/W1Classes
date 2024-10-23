import { AssetInfo } from "../asset/info";
import { TranslatableResource } from "../generic";

class MarketplaceProductRequest {
  id_user: string;
  id_category: string;
  language: string;
}

class MarketplaceProductResponse extends TranslatableResource {
	components: MarketplaceProductComponentResponse[];
	price: number;
	price_asset: AssetInfo;
}

class MarketplaceProductComponentResponse {
	quantity: number;
	capability?: MarketplaceProductCapabilityInfo;
	asset?: AssetInfo;
}

class MarketplaceProductCapabilityInfo extends TranslatableResource {
	periodicity: number;
	unit: string;
	precision: number;
	upgradeable: boolean;
}

export { MarketplaceProductRequest, MarketplaceProductResponse, MarketplaceProductComponentResponse };
