class Shape {

    constructor(private _x?, private _y?) {

    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y() {
        return this._y;
    }
    set y(value: number) {
        this._y = value;
    }



    area() {
        console.log(this.x * this._y);
    }
}
let a = new Shape();
a.x = 2;
a.y = 5;
a.area();
