import { assert } from "chai";
import { dirReduc } from "./task10";

function dotest(arr: string[], expected: string[]) {
    assert.deepEqual(dirReduc(arr), expected);
}

describe("Fixed Tests", function() {
    it("dirReduc", function() {
        var a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
        dotest(a, ["WEST"])
        var b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
        dotest(b, [])
        var c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
        dotest(c, ["NORTH"])
        var u = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
        dotest(u, ["EAST", "NORTH"])
        var v = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
        dotest(v, ["NORTH", "EAST"])
        var t =["NORTH", "WEST", "SOUTH", "EAST"]
        dotest(t, ["NORTH", "WEST", "SOUTH", "EAST"])
    });
});

function randint(a: number, b: number) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
//...............
function dirReducSQP(arr: string[]){
  var pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
  var way = arr.join('');
  while( pat.test(way) ) way = way.replace(pat, '');
  return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}
function randomDir(k: number) {
    var res: string[] = [];
    for (let i = 0; i < k; i++) {
        var n = randint(0, 3);
        var x;
        if (n == 0) x = "NORTH"; 
        else if (n == 1) x = "SOUTH"; 
        else if (n == 2) x = "WEST";
        else x = "EAST";
        res.push(x);
    }
    return res;
}
//...............

describe("Random Tests", function() {
    it("Random tests", function() {
        for (var i = 0; i < 100; i++) {
            var testlen = randint(8, 20);
            var arr = randomDir(testlen);
            var sol = dirReducSQP(arr);
            //console.log(sol, "\n");
            dotest(arr, sol);
        }
    });
});