import { assert } from "chai";
import { chooseBestSum } from './task12';

function dotest(t: number, k: number, ls: number[], expected: number | null) {
  assert.equal(chooseBestSum(t, k, ls), expected);
}

describe("Fixed Tests", function() {
    it("chooseBestSum", function() {
        var ts = [50, 55, 56, 57, 58]
        dotest(163, 3, ts, 163)
        ts = [50]
        dotest(163, 3, ts, null)
        ts = [91, 74, 73, 85, 73, 81, 87]
        dotest(230, 3, ts, 228)
        dotest(331, 2, ts, 178)
        dotest(331, 4, ts, 331)
        dotest(331, 5, ts, null)
        dotest(331, 1, ts, 91)
        dotest(700, 6, ts, 491)
        var xs = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
        dotest(230, 4, xs, 230)
        dotest(430, 5, xs, 430)
        dotest(430, 8, xs, null)
        dotest(880, 8, xs, 876)
        dotest(2430, 15, xs, 1287)
        dotest(100, 2, xs, 100)
        dotest(276, 3, xs, 276)
        dotest(3760, 17, xs, 3654)
        dotest(3760, 40, xs, null)
        dotest(50, 1, xs, 50)
        dotest(1000, 18, xs, null)
        xs = [100, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
        dotest(230, 4, xs, null)
        dotest(230, 2, xs, 223)
        dotest(2333, 1, xs, 2333)
        dotest(2333, 8, xs, 825)
        xs = [1000, 640, 1230, 2333, 1440, 500, 1320, 1230, 340, 890, 732, 1346]
        dotest(2300, 4, xs, 2212)
        dotest(2300, 5, xs, null)
        dotest(2332, 3, xs, 2326)
        dotest(23331, 8, xs, 10789)
        dotest(331, 2, xs, null)
    });
});

function randint(a: number, b: number) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
//...............
function comb897(ls: number[], k: number): number[][] {
    var res: number[][] = [];
    var subset, nxt;
    for (let i = 0; i < ls.length; i++) {
        if(k === 1){
            res.push([ls[i]]);
        } else {
            subset = comb897(ls.slice(i+1, ls.length), k - 1);
            for(let sub1 = 0; sub1 < subset.length; sub1++) {
                nxt = subset[sub1];
                nxt.unshift(ls[i]);
                res.push(nxt);
            }
        }
    }
    return res;
}

function chooseBestSum897(t: number, k: number, ls: number[]) {
    var a = comb897(ls, k);
    var mx = -1;
    var res: [number[], number] | null = null;
    for (var i = 0; i < a.length; i++) {
        var s = a[i].reduce(function(a, b) { return a + b; });
        if ((s >= mx) && (s <= t)) {
            res = [a[i], s];
            mx = s;
        }
    }
    return (res !== null) ? res[1] : null;
}
//...............

describe("Random Tests", function() {
    it("chooseBestSum", function() {
      for (var _ = 0; _ < 10; _++) {
        var r: number[] = []
        var l = randint(5, 15);
        for (var _ = 0; _ < l; _++) {
            var n = randint(10, 500);
            r.push(n);
        }
        var k = randint(50, 2000);
        var p = randint(1, 4);
        var sol = chooseBestSum897(k, p, r);
        dotest(k, p, r, sol);
      }
    });
});
