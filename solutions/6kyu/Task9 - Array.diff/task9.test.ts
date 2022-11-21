import { expect } from 'chai';
import { arrayDiff } from './task9';

describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(arrayDiff([1, 2], [1])).to.eql([2], 'a was [1, 2], b was [1]');
    expect(arrayDiff([1, 2, 2], [1])).to.eql([2, 2], 'a was [1, 2, 2], b was [1]');
    expect(arrayDiff([1, 2, 2], [2])).to.eql([1], 'a was [1, 2, 2], b was [2]');
    expect(arrayDiff([1, 2, 2], [])).to.eql([1,2,2], 'a was [1, 2, 2], b was []');
    expect(arrayDiff([], [1, 2])).to.eql([], 'a was [], b was [1, 2]');
    expect(arrayDiff([1, 2, 3], [1, 2])).to.eql([3], 'a was [1, 2, 3], b was [1, 2]');
  });
});

describe('Random tests', () => {
  function solution(a: number[], b: number[]) {
    return a.filter((el) => !b.includes(el));
  }

  function randomNumber(min: number, max: number) {
    return ~~(Math.random() * (max - min + 1)) + min;
  }

  function randomArray(length: number) {
    return Array(length).fill(0).map(() => randomNumber(0, 99));
  }


  for (let i = 0; i < 40; i += 1){
    const a = randomArray(randomNumber(0, 40));
    const b = randomArray(randomNumber(0, 40));

    it(`Testing for arrayDiff([${a}], [${b}])`, () => {
      expect(arrayDiff([...a], [...b])).to.eql(solution(a, b));
    })
  }
})