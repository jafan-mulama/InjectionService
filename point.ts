export class Point {


    constructor(private _x?, private y?) {

    }
    get x(): number {
        return this._x;

    }
    set x(value: number) {
        if (value < 0)
            throw new console.error(" value cannot be less than zero");

        this._x = value;
    }

    draw() {
        console.log('Value of x is=' + this.x + ' and value of y=' + this.y);

    }
}