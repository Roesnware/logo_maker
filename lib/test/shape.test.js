// import class 
const Shape = require('../shapes/shape.js');

// instance of shape test
describe('Shape', () => {
    // test for instance 
    test('should make instance of shape', () => {

        // make isntance 
        const shape = new Shape();

        // expect this 
        expect(shape instanceof Shape);
    });
    // test for parent strings 
    test('should render starting string for svg', () => {

        // make isntance 
        const shape = new Shape();

        // expect this string 
        expect(shape.renderStart()).toEqual('<svg width="300" height="200">');
    });
    // test for parent strings 
    test('should render ending string for svg', () => {

        // make isntance 
        const shape = new Shape();

        // expect this string 
        expect(shape.renderEnd()).toEqual('</svg>');
    });
});