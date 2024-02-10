class Circle {
    constructor (radius,color){
        this.radius = radius;
        this.color = color;
    }
}

getRadius() {
    return this.radius;
}

setRadius() {
    this.radius = radius;
}

getColor() {
    return this.color;
}

setRadius() {
    this.radius =radius;
}

toString() {
    return `Circle[radius = ${this.radius},color = ${this.color}]`;
}

getArea() {
    return Math.PI*this.radius*this.radius;
}

getCircumference() {
    return2 *Math.PI*this.radius;
}

const circle1 = new Circle(); 
console.log("Radius:", circle1.getRadius());
console.log("Color:", circle1.getColor());
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());