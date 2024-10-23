import { TranslatableResource } from "../generic";

class MarketplaceCategoriesRequest {
  id_user: string;
  language: string;
  id_asset?: string;
}

class MarketplaceCategoriesResponse extends TranslatableResource {

}

export { MarketplaceCategoriesRequest, MarketplaceCategoriesResponse };
