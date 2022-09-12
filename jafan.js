var Addition = /** @class */ (function () {
    function Addition(_a, _b) {
        this._a = _a;
        this._b = _b;
    }
    Object.defineProperty(Addition.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addition.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    Addition.prototype.sum = function () {
        return this.a + this._b;
    };
    return Addition;
}());
var abc = new Addition();
abc.a = 10;
abc.b = 2;
abc.sum();
