class Addition {

    constructor(private _a?, private _b?) {

    }

    public get a() {
        return this._a;
    }
    public set a(value) {
        this._a = value;
    }

    public get b() {
        return this._b;
    }
    public set b(value) {
        this._b = value;
    }

    sum() {
        return this.a + this._b
    }

}

let abc = new Addition();
abc.a = 10;
abc.b = 2;
abc.sum();
