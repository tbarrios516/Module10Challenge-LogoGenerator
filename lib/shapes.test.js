const { Circle, Triangle, Square } = require('./shapes');

test('Circle render should return correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Triangle render should return correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});

test('Square render should return correct SVG string', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
});
