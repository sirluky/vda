//number

console.log(parseInt("10.40"));
console.log(typeof parseFloat("10.33"));
console.log(typeof parseInt("10"));

let a = 1.4;
let b = 5;
console.log(a > b);
console.log(a === b);
// console.log("a", a, typeof a);
a = 2;
a = a + 4;
a = a + 1;
++a
// console.log("a", a, typeof a);
a = a - b;
--a

// console.log("a", a, typeof a);
// console.log(1 + false);

//string

let c = "ahoj";
console.log(c);
c = c + 'cau';
console.log(c);


//null and undefined
let d = null;
console.log(d);
let e = undefined;
console.log(e);

let f;
console.log(f);

console.log(d == e)
console.log(d === e)

// object

let car = { type: "Fiat", model: 500, color: "white" };
console.log(car);

car.type = "Skoda"
car["model"] = "Favorit"

console.log(car);

// pole

let pole = [1, 2, 4, "a", "b", f];
console.log(pole);