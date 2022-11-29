import { assert } from "chai";
import { beeramid } from "./task13";

describe("Beeramid", () => {
  it("Fixed tests", () => {
    assert.strictEqual(beeramid(9, 2), 1);
    assert.strictEqual(beeramid(10, 2), 2);
    assert.strictEqual(beeramid(11, 2), 2);
    assert.strictEqual(beeramid(21, 1.5), 3);
    assert.strictEqual(beeramid(454, 5), 5);
    assert.strictEqual(beeramid(455, 5), 6);
    assert.strictEqual(beeramid(4, 4), 1);
    assert.strictEqual(beeramid(3, 4), 0);
    assert.strictEqual(beeramid(0, 4), 0);
    assert.strictEqual(beeramid(-1, 4), 0);
  });
  
  it("Random tests", () => {
    
    function randint(min: number, max :number): number{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function sol(b: number, p: number): number{
      let n: number = 0;
      while(n * (n + 1) * (2 * n + 1) / 6 < Math.floor(b / p) + 1) n++
      return Math.max(0, n - 1)
    }
    
    for(let i: number = 0; i < 100; i++){
      let b: number = randint(-500, 10 ** randint(1, 5))
      let p: number = randint(10, 100) / 10
      let expected: number = sol(b, p)
      assert.strictEqual(beeramid(b, p), expected, `Testing for bonus = ${b}, price = ${p}`)
    }
  })
});
