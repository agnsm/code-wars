import { assert } from 'chai';
import { Kata } from './task2';

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(Kata.squareDigits(9119), 811181);
  });
  
  it("should pass some fixed tests", function() {
    assert.strictEqual(Kata.squareDigits(3212), 9414);
    assert.strictEqual(Kata.squareDigits(2112), 4114);
    assert.strictEqual(Kata.squareDigits(0), 0);
  });
  
  it("should pass some random tests", function() {
    const sol = (num: number): number => Number(num.toString().split('').map(Number).map(x => x * x).map(String).join(''));
    
    for (let i: number = 0; i < 100; i++) {
      let num: number = Math.floor((Math.random() * 1000) + 1);
      
      let actual: number = Kata.squareDigits(num);
      let expected: number = sol(num);
      
      assert.strictEqual(actual, expected, `Testing for num = ${num}`);
    }
  });
});
