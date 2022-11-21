import { assert } from 'chai';
import { solution } from './task7';

describe('solution', function(){
  it('basic', function(){
    assert.strictEqual(solution(1000), 'M')
    assert.strictEqual(solution(4), 'IV')
    assert.strictEqual(solution(1), 'I')
    assert.strictEqual(solution(1990), 'MCMXC')
    assert.strictEqual(solution(2008), 'MMVIII')
    assert.strictEqual(solution(1444), 'MCDXLIV')
  });

  it('test from 1 to 1000', function(){
    for (let i = 0; i <= 1000; ++i) {
      let n = i;
      assert.equal(solution(n), sol(n), `${n} should == "${sol(n)}"`)
    }
  });
  
  it('random', function(){
    const rnd = (x:number) => ~~(Math.random() * x);

    for (let i = 0; i <= 100; ++i) {
      let n = rnd(3888)+1;
      let exp = sol(n)
      assert.strictEqual(solution(n), exp)
    }
  });

  function sol(number:number) {
    const roman: Record<string,number> = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let ans = '';
    while (number>0) {
      for (let a in roman) {
        if (roman[a]! <= number) {
          ans += a;
          number -= roman[a]!;
          break;
        }
      }
    }
    return ans;
  }
});
