enum UserAssetTransactionType {
  SPEND = "spend",
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  SEND = "send",
  RECEIVE = "receive",
  SWAP = "swap",
}

class UserAssetTransactionLine {
  id_user: string;
  id_asset: string;
  amount: number;
  balance: number;
  exchange_rate: number;
}

class UserAssetTransactionRequest {
  type: UserAssetTransactionType;
  lines: UserAssetTransactionLine[];
}

class UserAssetTransactionResponse {
  id: string;
  error_code: number;
  error_message: string;
}

export {
  UserAssetTransactionRequest,
  UserAssetTransactionResponse,
  UserAssetTransactionType,
  UserAssetTransactionLine,
};
