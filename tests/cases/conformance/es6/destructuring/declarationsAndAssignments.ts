function f0() {
    var [] = [1, "hello"];
    var [x] = [1, "hello"];
    var [x, y] = [1, "hello"];
    var [x, y, z] = [1, "hello"];  // Error
    var [,, z] = [0, 1, 2];
    var x: number;
    var y: string;
}

function f1() {
    var a = [1, "hello"];
    var [x] = a;
    var [x, y] = a;
    var [x, y, z] = a;
    var x: number | string;
    var y: number | string;
    var z: number | string;
}

function f2() {
    var { } = { x: 5, y: "hello" };
    var { x } = { x: 5, y: "hello" };
    var { y } = { x: 5, y: "hello" };
    var { x, y } = { x: 5, y: "hello" };
    var x: number;
    var y: string;
    var { x: a } = { x: 5, y: "hello" };
    var { y: b } = { x: 5, y: "hello" };
    var { x: a, y: b } = { x: 5, y: "hello" };
    var a: number;
    var b: string;
}

function f3() {
    var [x, [y, [z]]] = [1, ["hello", [true]]];
    var x: number;
    var y: string;
    var z: boolean;
}

function f4() {
    var { a: x, b: { a: y, b: { a: z }}} = { a: 1, b: { a: "hello", b: { a: true } } };
    var x: number;
    var y: string;
    var z: boolean;
}

function f6() {
    var [x = 0, y = ""] = [1, "hello"];
    var x: number;
    var y: string;
}

function f7() {
    var [x = 0, y = 1] = [1, "hello"];  // Error, initializer for y must be string
    var x: number;
    var y: string;
}

function f8() {
    var [a, b, c] = [];   // Ok, [] is an array
    var [d, e, f] = [1];  // Error, [1] is a tuple
}

function f9() {
    var [a, b] = {};                // Error, not array type
    var [c, d] = { 0: 10, 1: 20 };  // Error, not array type
    var [e, f] = [10, 20];
}

function f10() {
    var { a, b } = {};  // Error
    var { a, b } = [];  // Error
}

function f11() {
    var { x: a, y: b } = { x: 10, y: "hello" };
    var { 0: a, 1: b } = { 0: 10, 1: "hello" };
    var { "<": a, ">": b } = { "<": 10, ">": "hello" };
    var { 0: a, 1: b } = [10, "hello"];
    var a: number;
    var b: string;
}

function f12() {
    var [a, [b, { x, y: c }] = ["abc", { x: 10, y: false }]] = [1, ["hello", { x: 5, y: true }]];
    var a: number;
    var b: string;
    var x: number;
    var c: boolean;
}

function f13() {
    var [x, y] = [1, "hello"];
    var [a, b] = [[x, y], { x: x, y: y }];
}

function f14([a = 1, [b = "hello", { x, y: c = false }]]) {
    var a: number;
    var b: string;
    var c: boolean;
}
f14([2, ["abc", { x: 0, y: true }]]);
f14([2, ["abc", { x: 0 }]]);
f14([2, ["abc", { y: false }]]);  // Error, no x

module M {
    export var [a, b] = [1, 2];
}

function f15() {
    var a = "hello";
    var b = 1;
    var c = true;
    return { a, b, c };
}

function f16() {
    var { a, b, c } = f15();
}

function f17({ a = "", b = 0, c = false }) {
}

f17({});
f17({ a: "hello" });
f17({ c: true });
f17(f15());

function f18() {
    var a: number;
    var b: string;
    var aa: number[];
    ({ a, b } = { a, b });
    ({ a, b } = { b, a });
    [aa[0], b] = [a, b];
    [a, b] = [b, a];  // Error
    [a = 1, b = "abc"] = [2, "def"];
}

function f19() {
    var a, b;
    [a, b] = [1, 2];
    [a, b] = [b, a];
    ({ a, b } = { b, a });
    [[a, b] = [1, 2]] = [[2, 3]];
    var x = ([a, b] = [1, 2]);
}

function f20() {
    var a: number[];
    var x: number;
    var y: number;
    var z: number;
    var [...a] = [1, 2, 3];
    var [x, ...a] = [1, 2, 3];
    var [x, y, ...a] = [1, 2, 3];
    var [x, y, z, ...a] = [1, 2, 3];
    [...a] = [1, 2, 3];
    [x, ...a] = [1, 2, 3];
    [x, y, ...a] = [1, 2, 3];
    [x, y, z, ...a] = [1, 2, 3];
}

function f21() {
    var a: (number | string | boolean)[];
    var x: number | string | boolean;
    var y: number | string | boolean;
    var z: number | string | boolean;
    var [...a] = [1, "hello", true];
    var [x, ...a] = [1, "hello", true];
    var [x, y, ...a] = [1, "hello", true];
    var [x, y, z, ...a] = [1, "hello", true];
    [...a] = [1, "hello", true];
    [x, ...a] = [1, "hello", true];
    [x, y, ...a] = [1, "hello", true];
    [x, y, z, ...a] = [1, "hello", true];
}
