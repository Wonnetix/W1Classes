declare enum UserAssetTransactionType {
    SPEND = "spend",
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    SEND = "send",
    RECEIVE = "receive",
    SWAP = "swap"
}
declare class UserAssetTransactionLine {
    id_user: string;
    id_asset: string;
    amount: number;
    payment_id: string;
}
declare class UserAssetTransactionRequest {
    type: UserAssetTransactionType;
    lines: UserAssetTransactionLine[];
}
declare class UserAssetTransactionResponse {
    id: string;
    error_code: number;
    error_message: string;
}
export { UserAssetTransactionRequest, UserAssetTransactionResponse, UserAssetTransactionType, UserAssetTransactionLine, };
