import { TranslatableResource } from "../generic";
declare class AssetInfo extends TranslatableResource {
    precision: number;
    symbol: string;
    can_buy: boolean;
    can_sell: boolean;
    can_transfer: boolean;
    can_deposit: boolean;
    can_withdraw: boolean;
    type: AssetTypeInfo;
}
declare class AssetTypeInfo extends TranslatableResource {
    is_fiat: boolean;
    is_crypto: boolean;
    is_token: boolean;
}
export { AssetInfo, AssetTypeInfo };
