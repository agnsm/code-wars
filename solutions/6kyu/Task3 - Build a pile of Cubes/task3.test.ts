import { findNb } from './task3';
import { assert } from "chai";

function testing(m: number, expected: number) {
  assert.strictEqual(findNb(m), expected);
}

describe("Fixed Tests nbMonths", function() {
    it("Basic tests", function() {
        testing(4183059834009, 2022)
        testing(24723578342962, -1)
        testing(135440716410000, 4824)
        testing(40539911473216, 3568)
        testing(26825883955641, 3218)
        testing(41364076483082, -1)

        testing(9541025211025, 2485)
        testing(112668204662785, -1)
        testing(79172108332642, -1)
        testing(1788719004901, -1)

        testing(20864367469009, 3022)
        testing(20864367469010, -1)
        
        testing(4, -1)
        testing(16, -1)
    });
});

function randint(a: number, b: number) { 
  return Math.floor(Math.random() * (b - a + 1) + a); 
}

function findNb1131(m: number) {
    var n = 0;
    while (m > 0) m -= Math.pow(++n, 3);
    return m ? -1 : n
}

describe("Random Tests", function() {  
  for (let i = 0; i < 100; i++) {
    let p = randint(1000, 4800);
    let k = p * p * (p + 1) * (p + 1) / 4 + randint(0, 1);
    let ans = findNb1131(k);
    it("Testing for :" +k + " --> " + ans, function() {
        testing(k, ans);
    }
  )};
});
