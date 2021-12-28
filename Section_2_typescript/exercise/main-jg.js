"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.like = void 0;
var like = /** @class */ (function () {
    function like(_number_of_like, _like_selected) {
        this._number_of_like = _number_of_like;
        this._like_selected = _like_selected;
    }
    Object.defineProperty(like.prototype, "number_of_like", {
        get: function () {
            return this._number_of_like;
        },
        set: function (number_of_like) {
            this._number_of_like = number_of_like;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(like.prototype, "like_selected", {
        get: function () {
            return this._like_selected;
        },
        enumerable: false,
        configurable: true
    });
    like.prototype.clicked = function () {
        if (this.like_selected)
            if (this.increased) {
                this.number_of_like = this.number_of_like + 1;
                this.increased = true;
                return this.number_of_like;
            }
            else {
                this.number_of_like = this.number_of_like - 1;
            }
    };
    return like;
}());
exports.like = like;
