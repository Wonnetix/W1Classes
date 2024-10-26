import { AssetInfo } from "../asset/info";
import { TranslatableResource } from "../generic";
declare class MarketplaceProductRequest {
    id_user: string;
    id_category: string;
    language: string;
}
declare class MarketplaceProductResponse extends TranslatableResource {
    components: MarketplaceProductComponentResponse[];
    price: number;
    price_asset: AssetInfo;
}
declare class MarketplaceProductComponentResponse {
    quantity: number;
    capability?: MarketplaceProductCapabilityInfo;
    asset?: AssetInfo;
}
declare class MarketplaceProductCapabilityInfo extends TranslatableResource {
    periodicity: number;
    unit: string;
    precision: number;
    upgradeable: boolean;
}
export { MarketplaceProductRequest, MarketplaceProductResponse, MarketplaceProductComponentResponse, };
