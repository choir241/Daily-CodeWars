// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


let isTriangle = (a,b,c) => a + b > c && a + c > b && c + b > a


//take in 3 integer values
//return true if triangle can be built with 3 sides of length
//else false
// assert.strictEqual(isTriangle(1,2,2), true);
// assert.strictEqual(isTriangle(7,2,2), false);
//a + b > c, a + c > b, c + b > a