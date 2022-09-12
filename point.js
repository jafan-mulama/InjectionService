"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new console.error(" value cannot be less than zero");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log('Value of x is=' + this.x + ' and value of y=' + this.y);
    };
    return Point;
}());
exports.Point = Point;
