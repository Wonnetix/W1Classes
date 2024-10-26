"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetTypeInfo = exports.AssetInfo = void 0;
var generic_1 = require("../generic");
var AssetInfo = (function (_super) {
    __extends(AssetInfo, _super);
    function AssetInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AssetInfo;
}(generic_1.TranslatableResource));
exports.AssetInfo = AssetInfo;
var AssetTypeInfo = (function (_super) {
    __extends(AssetTypeInfo, _super);
    function AssetTypeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AssetTypeInfo;
}(generic_1.TranslatableResource));
exports.AssetTypeInfo = AssetTypeInfo;
