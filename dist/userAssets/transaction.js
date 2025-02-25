"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAssetTransactionLine = exports.UserAssetTransactionType = exports.UserAssetTransactionResponse = exports.UserAssetTransactionRequest = void 0;
var UserAssetTransactionType;
(function (UserAssetTransactionType) {
    UserAssetTransactionType["SPEND"] = "spend";
    UserAssetTransactionType["DEPOSIT"] = "deposit";
    UserAssetTransactionType["WITHDRAW"] = "withdraw";
    UserAssetTransactionType["SEND"] = "send";
    UserAssetTransactionType["RECEIVE"] = "receive";
    UserAssetTransactionType["SWAP"] = "swap";
})(UserAssetTransactionType || (exports.UserAssetTransactionType = UserAssetTransactionType = {}));
var UserAssetTransactionLine = (function () {
    function UserAssetTransactionLine() {
    }
    return UserAssetTransactionLine;
}());
exports.UserAssetTransactionLine = UserAssetTransactionLine;
var UserAssetTransactionRequest = (function () {
    function UserAssetTransactionRequest() {
    }
    return UserAssetTransactionRequest;
}());
exports.UserAssetTransactionRequest = UserAssetTransactionRequest;
var UserAssetTransactionResponse = (function () {
    function UserAssetTransactionResponse() {
    }
    return UserAssetTransactionResponse;
}());
exports.UserAssetTransactionResponse = UserAssetTransactionResponse;
